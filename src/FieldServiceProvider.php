<?php

namespace Outl1ne\NovaTranslatable;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Arr;
use Laravel\Nova\Fields\Field;

class FieldServiceProvider extends ServiceProvider
{
    public function register()
    {
        // Publish configuration file
        $this->publishes([
            __DIR__ . '/../config/nova-translatable.php' => config_path('nova-translatable.php'),
        ], 'nova-translatable-config');

        // Serve asset(s)
        Nova::serving(function (ServingNova $event) {
            Nova::script('nova-translatable', __DIR__ . '/../dist/nova-translatable.js');
            Nova::script('nova-translatable-select-field', __DIR__ . '/../dist/nova-translatable-select-field.js');
        });

        // Register mixin
        Field::mixin(new TranslatableFieldMixin);

        $this->mergeConfigFrom(__DIR__ . '/../config/nova-translatable.php', 'nova-translatable');
    }

    protected static function isValidLocaleArray($localeArray)
    {
        return (!empty($localeArray) && is_array($localeArray) && Arr::isAssoc($localeArray));
    }

    public static function getLocales($overrideLocales = null)
    {
        if (is_callable($overrideLocales)) $overrideLocales = call_user_func($overrideLocales);
        if (static::isValidLocaleArray($overrideLocales)) return $overrideLocales;

        $configuredLocales = config('nova-translatable.locales', ['en' => 'English']);
        if (is_callable($configuredLocales)) $configuredLocales = call_user_func($configuredLocales);
        if (static::isValidLocaleArray($configuredLocales)) return $configuredLocales;

        return ['en' => 'English'];
    }

    public static function normalizeAttribute($attribute)
    {
        if (in_array(request()->method(), ['PUT', 'POST'])) {
            if (substr($attribute, -2) === '.*') $attribute = substr($attribute, 0, -2);
        }
        return $attribute;
    }
}
