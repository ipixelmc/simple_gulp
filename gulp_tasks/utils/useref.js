var useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    minifyCss = require('gulp-clean-css');

module.exports = function (gulp, callback) {
	return gulp.src(config.app + 'index.html')
     .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
         .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest(config.dist.origin));
}
