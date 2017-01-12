// Core
var gulp = require('gulp'),
    del = require('del');

// Gulp
var concat = require('gulp-concat'),
    less   = require('gulp-less'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

// Others
var autoprefixer = require('autoprefixer');



var paths = {
  desktop:{
    dir:'',
    less: [
      'less/*.less',
      'less/**/*.less',
      'less/**/**/*.less',
      'less/**/**/**/*.less'
    ],
    scripts: [
      'js/scripts/*.js',
      'js/scripts/**/*.js',
    ],
    images: ['paths/']
  }
};

// Clean
gulp.task('clean', function() {
  return del(['build']);
});

// Less
gulp.task('less', function () {
  gulp.src('less/index.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(rename('init.css'))
    .pipe(gulp.dest('css'));
});

// Scripts
gulp.task('scripts', ['clean'], function() {
  return gulp.src('js/scripts/index.js')
    .pipe(sourcemaps.init())
      .pipe(uglify())
      .pipe(concat('init.min.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('js'));
});

// Copy all static images
gulp.task('images', ['clean'], function() {
  return gulp.src(paths.images)
    // Pass in options to the task
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('dist/images'));
});

// Rerun the task when a file changes
gulp.task('watch-css', function() {
  gulp.watch(paths.desktop.less, ['less']);
  //gulp.watch(paths.desktop.scripts, ['scripts']);
});


// Minif Code
gulp.task('build-css', ['less'], function() {
  gulp.src('css/init.css')
    //.pipe(rename('init.min.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['build-css', 'scripts', 'less']); //, 'images'
