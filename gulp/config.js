// @file config.js
var path = require('path'),
    dest = path.resolve('./build'),
    src = path.resolve('./src'),
    relativeSrcPath = path.relative('.', src);

module.exports = {

    dest: dest,

    js: {
        src: src + '/js/**',
        dest: dest + '/js',
        uglify: false
    },

    copy: {
        src: [
            src + '/www/index.html'
        ],
        dest: dest
    },

    stylus: {
        src: [
            src + '/styl/**/!(_)*'
        ],
        dest: dest + '/css/',
        output: 'app.css',
        autoprefixer: {
            browsers: [ 'last 2 versions' ]
        },
        minify: false
    },

    webpack: {
        entry: path.resolve(src + '/js/app.js'),
        output: {
            path: path.resolve(src + '/js/app.js'),
            filename: 'bundle.js',
            library: 'amd',
            publicPath : 'js/'
        },
        resolve: {
            extensions: [ '', '.js' ]
        }
    },

    watch: {
        js: relativeSrcPath + '/js/**',
        styl: relativeSrcPath + '/styl/**',
        www: relativeSrcPath + '/www/index.html'
    },

    webpackServer: {
        host: 'localhost',
        port: 61980,
        hot: true,
        contentBase: dest,
        // Enable special support for Hot Module Replacement
        // Page is no longer updated, but a "webpackHotUpdate" message is send to the content
        // Use "webpack/hot/dev-server" as additional module in your entry point
        // Note: this does _not_ add the `HotModuleReplacementPlugin` like the CLI option does.

        // webpack-dev-middleware options
        quiet: false,
        noInfo: false,
        lazy: true,
//        filename: "bundle.js",
        watchDelay: 300,
//        publicPath: "/assets/",
//        headers: { "X-Custom-Header": "yes" },
        stats: { colors: true },

        // Set this as true if you want to access dev server from arbitrary url.
        // This is handy if you are using a html5 router.
        historyApiFallback: false

        // Set this if you want webpack-dev-server to delegate a single path to an arbitrary server.
        // Use "*" to proxy all paths to the specified server.
        // This is useful if you want to get rid of 'http://localhost:8080/' in script[src],
        // and has many other use cases (see https://github.com/webpack/webpack-dev-server/pull/127 ).
//        proxy: {
//            "*": "http://localhost:61981"
//        }
    }
};