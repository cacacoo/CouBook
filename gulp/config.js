// @file config.js
var path = require('path'),
    dest = path.resolve('./dist'),
    src = path.resolve('./src'),
    gulpConfigHost = 'localhost',
    gulpConfigPort = 1980,
    gulpLivereloadPort = 35729,
    relativeSrcPath = path.relative('.', src),
    current = process.cwd();

module.exports = {

    profile: 'test',
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

    open: {
        url: "http://" + gulpConfigHost + ":" + gulpConfigPort,
//        app: "chrome" // window
//        app: "google-chrome" // Linux
        app: "google chrome"
    },

    express: {
        path: dest,
        port: gulpConfigPort,
        livereloadPort: gulpLivereloadPort
    },

    copy: {
        src: [
            src + '/www/index.html'
        ],
        dest: dest
    },

    sass: {
        src: [
            src + '/app/sass/**/*.css',
            src + '/app/sass/**/*.sass'
        ],
        dest: dest + '/css/',
        output: 'app.css',
        style: 'compressed', 
        errLogToConsole: true
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
            publicPath : 'app/'
        },
        resolve: {
            extenstions: [ '', '.js' ],
            root: [
                path.resolve('node_modules'),
                path.join(src + "/app/components")
            ]
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