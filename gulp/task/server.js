// @file server.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

var gulp = require('gulp');

gulp.task('server', ['build', 'webpack-dev-server', 'watch']);