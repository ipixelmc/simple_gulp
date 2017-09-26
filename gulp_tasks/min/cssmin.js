var jade   = require('gulp-cssmin');
var rename = require("gulp-rename");

module.exports = function(gulp, callback) {
	return gulp.src('app/app-assets/**/*.css')
		.pipe(cssmin())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('dist'));
};