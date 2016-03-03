
'use strict';

const autoprefixer = require('autoprefixer');
const del = require('del');
const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass');
const sassdoc = require('sassdoc');

const processors = [autoprefixer({
      browsers: ['last 2 versions', 'ie >= 10', 'Android >= 4.4']
    })];

const src = './__test__/css/src/index.scss';
const sassdocSrc = './scss/**/*';
const dest = './__test__/css';

gulp.task('default', ['watch']);

gulp.task('clean', () => {});

gulp.task('sass', () => {
  gulp.src(src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest(dest));
});

gulp.task('sassdoc', () => {
  return gulp.src(sassdocSrc)
    .pipe(sassdoc());

});

gulp.task('watch', ['sass'], () => {
  gulp.watch(['./scss/**/*'], ['sass']);
});
