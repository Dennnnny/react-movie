const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const changed = require('gulp-changed');



// SCSS-CSS

const SCSS_SRC = './src/Assets/scss/*.scss';
const SCSS_DEST = './src/Assets/css';

// Compile SCSS 

gulp.task('compile_scss', function (done) {

  gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST))
    .on('end', done);

});

// detect changeing 

gulp.task('watch_scss', function () {
  gulp.watch(SCSS_SRC, gulp.parallel('compile_scss'));
});

// run task 

gulp.task('default', gulp.parallel('watch_scss'));