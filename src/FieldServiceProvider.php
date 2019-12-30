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
                $this->withMeta([
                    'translatable' => [
                        'original_component' => $component,
                        'locales' => $locales,
                        'value' => $resource->getTranslations($attribute)
                    ],
                ]);

                $this->component = 'translatable-field';

                return $this->resolveAttribute($resource, $attribute);
            });

            $this->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                $translations = (array) json_decode($request->{$attribute});
                $model->setTranslations($attribute, $translations);
            });

            return $this;
        });
    }

    public function register()
    {
        //
    }
}
