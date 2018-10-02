var gulp = require('gulp'),
	nunjucksRender = require('gulp-nunjucks-render'),
	less = require('gulp-less'),
	minifyCSS = require('gulp-csso'),
	concatJS = require('gulp-concat'),
	renameJS = require('gulp-rename'),
	minifyJS = require('gulp-uglify'),
	browserSync = require('browser-sync').create();

gulp.task('nunjucks', function() {
	// Gets .html and .nunjucks files in pages
	return gulp.src('app/pages/**/*.+(html|nunjucks)')
	// Renders template with nunjucks
	.pipe(nunjucksRender({
		path: ['app/templates']
 	}))
	// output files in app folder
	.pipe(gulp.dest('app'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('css', function(){
	return gulp.src('app/less/*.less')
	.pipe(less())
	.pipe(minifyCSS())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('js', function(){
	return gulp.src('app/js/*.js')
	.pipe(concatJS('scripts.js'))
	.pipe(gulp.dest('app/js'))
	.pipe(renameJS('scripts.min.js'))
	.pipe(minifyJS())
	.pipe(gulp.dest('app/js'))
	.pipe(browserSync.reload({
		stream: true
	}));
});

gulp.task('browserSync', function() {
	browserSync.init({
		server: "app"
	})
})

gulp.task('watch', ['browserSync', 'css', 'nunjucks', 'js'], function(){
	gulp.watch("app/less/*.less", ['css']);
	gulp.watch("app/js/*.js", ['js']);
	gulp.watch("app/templates/partials/*.nunjucks", ['nunjucks']);
});

//gulp.task('default', ['nunjucks','css','watch']);