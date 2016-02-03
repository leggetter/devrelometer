var gulp = require('gulp');
var gulpsync = require('gulp-sync')(gulp);
var gulp_jspm = require('gulp-jspm');
var webserver = require('gulp-webserver');
var rename = require('gulp-rename');
var htmlreplace = require('gulp-html-replace');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});
 
gulp.task('build-dist', ['copy-assets'], function(){
    return gulp.src('src/main.js')
        .pipe( gulp_jspm({selfExecutingBundle: true, minify: true}) )
        .pipe( rename({basename: 'devrelometer.bundle'}) )
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-assets', function() {
  return gulp.src('index.html')
      .pipe( htmlreplace({js: 'devrelometer.bundle.js'}) )
      .pipe(gulp.dest('dist/'));
});

gulp.task('gh-pages-push', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('deploy', gulpsync.sync(
  [
    'build-dist',
    'gh-pages-push'
  ]
));
