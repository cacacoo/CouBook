var gulp = require('gulp'),
    gutil = require('gulp-util');
    config = require('../config');

function serverListen() {
    require("../../src/server/server");
    gutil.log("start express server");
}

gulp.task('express', function () {
    serverListen();
});