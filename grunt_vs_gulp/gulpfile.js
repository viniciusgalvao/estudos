var gulp 	= require('gulp');
var jshint 	= require('gulp-jshint');
var clean	= require('gulp-clean');
var concat 	= require('gulp-concat');
var uglify  = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var cleanCSS= require('gulp-clean-css');
var rename	= require('gulp-rename');
var es		= require('event-stream');
var runSequence = require('run-sequence');
var ngAnnotate = require('gulp-ng-annotate');

// clean
gulp.task('clean', function () {
	return gulp.src('dist/')
		.pipe(clean());
});

// jshint
gulp.task('jshint', function () {
	return gulp.src('js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});


// uglify com concat e minificação do js
gulp.task('uglify', function () {
	return es.merge([
		gulp.src(['lib/angular/angular.min.js', 'lib/angular/angular-route.js', 'lib/angular/angular-messages.js', 'lib/angular/angular-locale_pt-br.js', 'lib/serialGenerator/serialGenerator.js', 'lib/ui/ui.js']),
		gulp.src(['js/**/*.js']).pipe(concat('scripts.js')).pipe(ngAnnotate()).pipe(uglify())
	])
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('dist/js'));
});

// minificando html
gulp.task('htmlmin', function () {
	return gulp.src('view/*.html')
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist/view'));
});

// minificando css
gulp.task('cssmin', function () {
	return gulp.src(['lib/bootstrap/bootstrap.css', 'css/*.css'])
		.pipe(cleanCSS())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('copy', function () {
	return gulp.src('index-prod.html')
		.pipe(rename('index.html')) 
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', function (cb) {
	return runSequence('clean', ['jshint', 'uglify', 'htmlmin', 'cssmin', 'copy'], cb); 
});