var gulp = require('gulp'),
    watch = require('gulp-watch'),
    config = require('../config').watch;

gulp.task('server', ['build', 'express', 'livereload', 'watch']);