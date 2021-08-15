const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
  console.log('Contruyendo el sitio');
  setTimeout(cb, 1200);
});

gulp.task('serve', (cb) => {
  gulp.src('www').pipe(server({ livereload: true, open: true }));
});


//* para ejecutrar todas las tareas

gulp.task('default', gulp.series('buid', 'serve'))