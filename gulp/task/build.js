// @file build.js
var gulp = require('gulp');

gulp.task('build', ['clean', 'webpack', 'sass', 'copy']);