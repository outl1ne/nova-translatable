const mix = require('laravel-mix');

mix.setPublicPath('dist').js('resources/js/translatable-field.js', 'js').vue();
