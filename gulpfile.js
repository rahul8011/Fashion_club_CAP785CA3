const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

// Minify CSS
gulp.task("minify-css", () => {
  return gulp
    .src("src/css/*.css")
    .pipe(cleanCSS())
    .pipe(concat("styles.min.css"))
    .pipe(gulp.dest("dist/css"));
});

// Minify JS
gulp.task("minify-js", () => {
  return gulp
    .src("src/js/*.js")
    .pipe(uglify())
    .pipe(concat("script.min.js"))
    .pipe(gulp.dest("dist/js"));
});


// Default Task
gulp.task("default", gulp.parallel("minify-css", "minify-js"));
