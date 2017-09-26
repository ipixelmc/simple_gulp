var gulpCopy = require('gulp-copy');

module.exports = function(gulp, callback) {
	return gulp.src(config.source.html+'/**/*.html')
		.pipe(gulp.dest(config.dist.html));
};