var browserSync = require('browser-sync');

module.exports = function(gulp, callback) {
	return browserSync({
        server: {
            baseDir: "./dist"
        }
        });
};
