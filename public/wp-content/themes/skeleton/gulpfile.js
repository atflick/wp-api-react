'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);

	gulp.src('css/*.css')
	    .pipe(minifyCSS())
	    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
	    .pipe(concat('style.min.css'))
	    .pipe(gulp.dest('dist/css'))

  	gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
});