var clean = require('gulp-clean');

module.exports = function(gulp, callback) {
	return gulp.src(config.clean.css, {
			read: false
		})
		.pipe(clean());
};