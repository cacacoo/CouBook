var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    webpack = require('gulp-webpack'),
    gulpIgnore = require('gulp-ignore'),
    config = require('../config');

gulp.task('webpack', function () {

    gulp.src(config.webpack.entry)
        .pipe(gulpif(config.js.jshint.enable, jshint(config.js.jshint.config)))
        .pipe(gulpif(config.js.jshint.enable, jshint.reporter('jshint-stylish')))
        .pipe(webpack(config.webpack))
        .pipe(gulpif(config.js.uglify, uglify()))
        .pipe(gulp.dest(config.js.dest));
});