var gulp = require('gulp'),
	babel = require('gulp-babel'),
	sass = require('gulp-sass'),
	cached = require('gulp-cached'),
	watch = require('gulp-watch');

gulp.task('html', function() {
	return gulp.src('client/**/*.html')
		.pipe(gulp.dest('public'));
});

gulp.task('scss', function() {
	return gulp.src('client/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));
});

gulp.task('jsx', function() {
	return gulp.src('client/jsx/**/*.jsx')
		.pipe(cached('scripts'))
		.pipe(babel({
			modules: 'amd'
		}))
		.pipe(gulp.dest('public/js'));
});

gulp.task('watch', ['html', 'scss', 'jsx'], function() {
	gulp.watch("client/**/*.html", ['html']);
	gulp.watch("client/**/*.jsx", ['jsx']);
	gulp.watch("client/**/*.scss", ['scss']);
});

gulp.task('default', ['html', 'scss', 'jsx'], function() {});
