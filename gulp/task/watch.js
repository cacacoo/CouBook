// @file watch.js
var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config');
var ld = require('./livereload');

function notifyLiveReload(event) {
    var fileName = require('path').relative(config.express.path, event.path);

    ld.tinylr.changed({
        body: {
            files: [fileName]
        }
    });
}

gulp.task('watch', function () {

    // js
    watch(config.watch.js, function (e) {
        gulp.start(['webpack']);
        notifyLiveReload(e);
    });

    // styl
    watch(config.watch.styl, function (e) {
        gulp.start(['stylus']);
        notifyLiveReload(e);
    });

    // www
    watch(config.watch.www, function (e) {
        gulp.start(['copy']);
        notifyLiveReload(e);
    });

});