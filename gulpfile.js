var gulp = require('gulp');
var imagemin = require('gulp-imageMin');
var sass = require('gulp-sass');

gulp.task('imageMin', () =>
  gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./image/'))
);

gulp.task('sass', function(){
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/'));
});

gulp.task('default', ['imageMin','sass']);
gulp.task('watch', function(){
  gulp.watch('img/*',['imageMin']);
  gulp.watch('sass/**/*.scss', ['sass']);
});
