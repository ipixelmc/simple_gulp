var gulpCopy = require('gulp-copy');

module.exports = function(gulp, callback) {
	return gulp.src(config.source.fonts+'/**')
		.pipe(gulp.dest(config.dist.fonts));
};