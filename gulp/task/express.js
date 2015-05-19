var gulp = require('gulp'),
    config = require('../config');

function serverListen() {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')({port: config.express.livereloadPort}));
    app.use(express.static(config.express.path));
    app.listen(config.express.port);
}

gulp.task('express', function () {
    serverListen();
});