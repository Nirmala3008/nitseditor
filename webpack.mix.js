const mix = require('laravel-mix');

mix.webpackConfig({
    node: {
        fs: "empty"
    },
    output: {
        publicPath: '/',
        chunkFilename: 'nits-assets/chunks/[name].[chunkhash].js',
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'vendor/nitseditor/framework/src/Frontend')
        ],
        alias: {
            NitsModels: path.resolve(__dirname, 'vendor/nitseditor/framework/src/Frontend/Admin/models'),
            NitsTheme: path.resolve(__dirname, 'vendor/nitseditor/framework/src/Frontend/Admin/theme')
        }
    }
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

mix.js('vendor/nitseditor/framework/src/Frontend/Admin/admin.js', 'public/nits-assets/js/admin')
    .sourceMaps()
    .version();
