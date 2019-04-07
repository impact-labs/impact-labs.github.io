var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var browserSync = require('browser-sync').create();

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/scss/**/*',
    ])
    .pipe(gulp.dest('./vendor/bootstrap/scss'))

  gulp.src([
      './node_modules/bootstrap/dist/js/bootstrap.bundle.min*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap/js'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/jquery.min.*'
    ])
    .pipe(gulp.dest('./vendor/jquery'))
})

// Default task
gulp.task('default', ['dev']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['browserSync'], function() {
  gulp.watch('./js/*.js', browserSync.reload);
  gulp.watch('./*.html', browserSync.reload);
  gulp.watch('./*/*.html', browserSync.reload);
  gulp.watch('./css/*.scss',['styles']);
});

// Compile sass to css
gulp.task('styles', function() {
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(minifyCSS())
        .pipe(gulp.dest('./css/'))
});