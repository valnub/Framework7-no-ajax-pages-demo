var gulp = require('gulp');
var jade = require('gulp-jade');
var server = require('gulp-server-livereload');

var paths = {
  templates: ['src/index.jade'],
  dist: './dist',
  jade: './src/index.jade'
};

gulp.task('templates', function() {
  gulp.src(paths.jade)
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true
    }))
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['templates', 'watch', 'webserver']);