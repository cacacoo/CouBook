var gulp = require('gulp'),
    config = require('../config'),
    tinylr = require('tiny-lr')();

gulp.task('livereload', function() {
    tinylr.listen(config.express.livereloadPort);
});

exports.tinylr = tinylr;