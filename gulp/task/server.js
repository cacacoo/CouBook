// @file server.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('server', ['build', 'express', 'livereload', 'watch']);