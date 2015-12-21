var gulp = require('gulp');
var sass = require('gulp-sass');
var aigis = require("gulp-aigis");

gulp.task('sass', function () {
  gulp.src('src/generic.scss')
    .pipe(sass({
      // includePaths: require('node-bourbon').with('other/path', 'another/path')
      // - or -
      includePaths: require('node-bourbon').includePaths
    }))
    .pipe(gulp.dest('src/output.css'));
});


gulp.task("aigis", function() {
  gulp.src("./aigis_config.yml")
    .pipe(aigis());
});
