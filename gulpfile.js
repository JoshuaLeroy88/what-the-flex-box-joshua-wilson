var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  gulp.src('what-the-flex-box-joshua-wilson/auto-prefixer.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))
});


gulp.task('watch',function() {
  gulp.watch('css/styles.css', ['styles']);
});