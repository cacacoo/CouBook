// @file watch.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;
var livereload = require('gulp-livereload');

livereload({ start: true });

gulp.task('watch', function () {

    livereload.listen();

    // js
    watch(config.js, function () {
        gulp.start(['webpack']);
    });

    // styl
    watch(config.styl, function () {
        gulp.start(['stylus']);
    });

    // www
    watch(config.www, function () {
        gulp.start(['copy']);
    });

});