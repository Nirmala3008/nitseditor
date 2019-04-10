const mix = require('laravel-mix');

mix.webpackConfig({
    node: {
        fs: "empty"
    },
    output: {
        publicPath: '/',
        chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
    },
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/admin/admin.js', 'public/nits-assets/js/admin')
   .sass('resources/sass/app.scss', 'public/nits-assets/css');
