<?php

namespace OptimistDigital\NovaTranslatable;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Fields\Field;
use Illuminate\Support\Arr;

class FieldServiceProvider extends ServiceProvider
{
    protected function isValidLocaleArray($localeArray)
    {
        return (!empty($localeArray) && is_array($localeArray) && Arr::isAssoc($localeArray));
    }

    public function getLocales($overrideLocales = null)
    {
        if (is_callable($overrideLocales)) $overrideLocales = call_user_func($overrideLocales);
        if ($this->isValidLocaleArray($overrideLocales)) return $overrideLocales;

        $configuredLocales = config('nova-translatable.locales', ['en' => 'English']);
        if (is_callable($configuredLocales)) $configuredLocales = call_user_func($configuredLocales);
        if ($this->isValidLocaleArray($configuredLocales)) return $configuredLocales;

        return ['en' => 'English'];
    }

    public function boot()
    {
        // Publish configuration file
        $this->publishes([
            __DIR__ . '/../config/nova-translatable.php' => config_path('nova-translatable.php'),
        ], 'nova-translatable-config');

        // Serve asset(s)
        Nova::serving(function (ServingNova $event) {
            Nova::script('translatable-field', __DIR__ . '/../dist/js/translatable-field.js');
        });

        // Register macro
        $self = $this;

        Field::macro('translatable', function ($overrideLocales = []) use ($self) {
            $locales = $self->getLocales($overrideLocales);
            $component = $this->component;

            $this->resolveUsing(function ($value, $resource, $attribute) use ($locales, $component) {
                // Load value from either the model or from the given $value
                if (isset($resource) && method_exists($resource, 'getTranslations')) {
                    $value = $resource->getTranslations($attribute);
                } else if (is_string($value)) {
                    $value = json_decode($value);
                }

                $value = (array) $value;

                $this->withMeta([
                    'translatable' => [
                        'original_attribute' => $this->attribute,
                        'original_component' => $component,
                        'locales' => $locales,
                        'value' => $value
                    ],
                ]);

                $this->component = 'translatable-field';

                // If it's a CREATE or UPDATE request, we need to trick the validator a bit
                if (in_array(request()->method(), ['PUT', 'POST'])) {
                    $this->attribute = "{$this->attribute}.*";
                }

                return $this->resolveAttribute($resource, $attribute);
            });

            $this->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                $realAttribute = $this->meta['translatable']['original_attribute'] ?? $attribute;
                $value = $request->{$realAttribute};
                $translations = is_string($value) ? (array) json_decode($value) : $value;
                if (method_exists($model, 'setTranslations')) $model->setTranslations($realAttribute, $translations);
                else $model->{$realAttribute} = $translations;
            });

            return $this;
        });
    }

    public function register()
    {
        //
    }
}
