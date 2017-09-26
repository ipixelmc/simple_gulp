var imagemin = require('gulp-imagemin');

module.exports = function(gulp, callback) {
    return gulp.src(config.source.image)
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist.image));
};	