<?php

namespace OptimistDigital\MultiselectField;

use Laravel\Nova\Nova;
use Laravel\Nova\Events\ServingNova;
use Illuminate\Support\ServiceProvider;

class FieldServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Nova::serving(function (ServingNova $event) {
            Nova::script('translatable-field', __DIR__ . '/../dist/js/translatable-field.js');
        });
    }

    public function register()
    {
        //
    }
}
