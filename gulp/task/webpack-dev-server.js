var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var config = require('../config');
var WebpackDevServer = require("webpack-dev-server");

gulp.task("webpack-dev-server", function(callback) {


    var compiler = webpack(config.webpack);

    new WebpackDevServer(compiler).listen(config.webpackServer.port, config.webpackServer.host, function(err) {

        if(err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }

        // Server listening
        gutil.log("[webpack-dev-server]", new Date());

        // keep the server alive or continue?
        // callback();
    });
});