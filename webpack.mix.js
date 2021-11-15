const mix = require('laravel-mix');

mix.setPublicPath('dist').js('resources/js/translatable-field.js', 'js').vue();
mix.setPublicPath('dist').js('resources/js/locale-select-field.js', 'js').vue();
