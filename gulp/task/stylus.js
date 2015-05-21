// @file stylus.js
var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    plumber = require('gulp-plumber'),
    stylus = require('gulp-stylus'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minify = require('gulp-minify-css'),
    config = require('../config').stylus;

gulp.task('stylus', function () {
    gulp.src(config.src)
        .pipe(plumber())              // 에러가 발생해도 중단하지 않게
        .pipe(stylus())               // 실제 컴파일은 여기서
        .pipe(concat(config.output))  // 하나의 파일로 합친다
        .pipe(autoprefixer(config.autoprefixer))  // 벤더 프리픽스를 붙인다
        .pipe(gulpif(config.minify, minify()))    // 필요하다면 미니파이
        .pipe(gulp.dest(config.dest));            // 데스티네이션.
});