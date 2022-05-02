let mix = require('laravel-mix');
let path = require('path');

mix
  .setPublicPath('dist')
  .js('./resources/js/translatable-field.js', 'js')
  .js('./resources/js/locale-select-field.js', 'js')
  .vue({ version: 3 })
  .webpackConfig({
    externals: {
      vue: 'Vue',
    },
    output: {
      uniqueName: 'outl1ne/nova-translatable',
    },
  })
  .alias({
    'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
  });
