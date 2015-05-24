var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    config = require('../config').sass;

gulp.task('sass', function() {
    return gulp.src(config.src)
        .pipe(sass(config))
        .pipe(concat(config.output))
        .pipe(minifycss())
        .pipe(gulp.dest(config.dest))
});