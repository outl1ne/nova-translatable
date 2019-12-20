<?php

namespace OptimistDigital\NovaTranslatable;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Fields\Field;

class FieldServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('translatable-field', __DIR__ . '/../dist/js/translatable-field.js');
        });

        // Register macro
        Field::macro('translatable', function ($locales = []) {
            $this->withMeta([
                'translatable' => [
                    'original_component' => $this->component,
                    'locales' => $locales,
                ],
            ]);

            $this->component = 'translatable-field';
        });
    }

    public function register()
    {
        //
    }
}
