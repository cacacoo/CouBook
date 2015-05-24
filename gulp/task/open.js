var gulp = require("gulp"),
    open = require("gulp-open"),
    config = require("../config");

gulp.task('open', function() {
    gulp.src(config.dest)
        .pipe(open('/', config.open));
});
