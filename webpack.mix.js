const mix = require('laravel-mix');

mix
  .options({
    processCssUrls: false
  })
  .js('resources/js/map.js', 'assets/js/map.js')
  .sass('resources/sass/map.scss', 'assets/css/map.css')
;
