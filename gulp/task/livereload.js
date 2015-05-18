var gulp = require('gulp'),
    tinylr = require('tinylr');

gulp.task('livereload', function() {
    tinylr.listen(4002);
});