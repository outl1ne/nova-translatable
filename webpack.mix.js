let mix = require('laravel-mix');

mix.extend('nova', new require('laravel-nova-devtool'));

mix
  .setPublicPath('dist')
  .js('./resources/js/translatable-field.js', 'nova-translatable.js')
  .js('./resources/js/locale-select-field.js', 'nova-translatable-select-field.js')
  .vue({ version: 3 })
  .nova('outl1ne/nova-translatable');
