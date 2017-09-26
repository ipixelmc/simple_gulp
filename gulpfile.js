//Require modules
var gulp             = require('gulp');
var gutil            = require('gulp-util'); //message log
var gulpSequence     = require('gulp-sequence');
var gulpRequireTasks = require('gulp-require-tasks'); //Create a directory alongside your gulpfile.js to store your individual task modules

//global variables
global.config = require('./gulp.config.json');


gutil.log(gutil.colors.green('Starting Gulp!!'));

gulpRequireTasks({
	path: process.cwd() + '/gulp_tasks'
})

// CSS Distribution Task. 'autoprefixer:css', 'csscomb:css',
gulp.task('dist-css', gulpSequence('clean:css', 'sass-compile'));

// JS Distribution Task.
gulp.task('dist-js', gulpSequence('clean:js','utils:useref'));

// Full Distribution Task.
gulp.task('dist', gulpSequence('dist-js','dist-css','copy:views','utils:useref','copy:fonts','utils:imagemin'));


// SASS Compile Task.
gulp.task('sass-compile', ['sass:main']);

// Monitor changes for both jade and sass files.
gulp.task('monitor', ['sass:watch']);

// Start server
gulp.task('serve', gulpSequence('utils:validatejs','sass-compile','server:dev','monitor'));

//Start dist
gulp.task('serve-dist',['server:dist']);

// Default Task.
gulp.task('default', ['serve']);
