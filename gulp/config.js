// @file config.js
var path = require('path'),
    dest = path.resolve('./dist'),
    src = path.resolve('./src'),
    relativeSrcPath = path.relative('.', src);

module.exports = {

    dest: dest,

    js: {
        src: src + '/app/**',
        dest: dest + '/app',
        uglify: false,
        jshint: {
            enable: true,
            config: '.jshintrc',
            ignorePattern: dest + 'app/**'
        }
    },

    express: {
        path: dest,
        port: 1980,
        livereloadPort: 35729
    },

    copy: {
        src: [
            src + '/www/index.html'
        ],
        dest: dest
    },

    stylus: {
        src: [
            src + '/app/styl/**/!(_)*'
        ],
        dest: dest + '/css/',
        output: 'app.css',
        autoprefixer: {
            browsers: [ 'last 2 versions' ]
        },
        minify: false
    },

    webpack: {
        entry: path.resolve(src + '/app/Main.js'),
        output: {
            path: path.resolve(src + '/app/Main.js'),
            filename: 'bundle.js',
//            library: 'amd',
            publicPath : 'app/'
        },
        resolve: {
            extensions: [ '', '.js' ]
        }
    },

    watch: {
        js: relativeSrcPath + '/app/**',
        styl: relativeSrcPath + '/app/styl/**',
        www: relativeSrcPath + '/www/index.html'
    },

    webpackServer: {
        host: 'localhost',
        port: 61980,
        hot: true,
        contentBase: dest,
        quiet: false,
        noInfo: false,
        lazy: true,
        watchDelay: 100,
        stats: { colors: true },
        historyApiFallback: false
    }
};