var reload = require('browser-sync').reload;
module.exports = function(gulp, callback) {
	return gulp.watch(config.source.sass+'/main.scss', ['sass-compile-style']).on('change',reload);;
};