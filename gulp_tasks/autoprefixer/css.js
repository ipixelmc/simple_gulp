var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp, callback) {
    return gulp.src([config.dist+'css/main.css'], { cwd: config.dist })
        .pipe(autoprefixer({
            browsers: config.autoprefixerBrowsers,
            cascade: false
        }))
        .pipe(gulp.dest(config.dist));
};