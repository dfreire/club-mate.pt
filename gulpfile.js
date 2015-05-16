var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sass = require('gulp-sass'),
    cached = require('gulp-cached'),
    watch = require('gulp-watch');

gulp.task('static', function() {
    gulp.src('client/**/*.html')
        .pipe(gulp.dest('public'));
    gulp.src('client/**/*.ico')
        .pipe(gulp.dest('public'));
    gulp.src('client/**/*.png')
        .pipe(gulp.dest('public'));
    gulp.src('client/**/*.jpg')
        .pipe(gulp.dest('public'));
});

gulp.task('scss', function() {
    gulp.src('client/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css'));
});

gulp.task('jsx', function() {
    gulp.src('client/jsx/**/*.jsx')
        .pipe(cached('scripts'))
        .pipe(babel({
            modules: 'amd'
        }))
        .pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['static', 'scss', 'jsx'], function() {
    gulp.watch("client/**/*.html", ['static']);
    gulp.watch("client/**/*.ico", ['static']);
    gulp.watch("client/**/*.png", ['static']);
    gulp.watch("client/**/*.jpg", ['static']);
    gulp.watch("client/**/*.jsx", ['jsx']);
    gulp.watch("client/**/*.scss", ['scss']);
});

gulp.task('default', ['static', 'scss', 'jsx'], function() {});
