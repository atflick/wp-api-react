'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');


var sass = require('gulp-sass');

gulp.task('default', function () {
  browserSync.init(null, {
    proxy: "wp.dev"
    });

	gulp.watch('./sass/**/*.scss', ['sass']);

	gulp.src('css/*.css')
	    .pipe(minifyCSS())
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
	    .pipe(concat('style.min.css'))
	    .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());

  gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
      .pipe(browserSync.stream());


});


// Run SASS compiling and reloading
gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
      .pipe(sourcemaps.init())
        .pipe(sass({
          errLogToConsole: true
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});