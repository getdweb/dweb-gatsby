var gulp = require('gulp');
// var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var concatcss = require('gulp-concat-css');
var csso = require('gulp-csso');
// var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
// var urlAdjuster = require('gulp-css-url-adjuster');
// var mergeStream =   require('merge-stream');


var scripts = [
	'./src/js/main.js'
];
var styles_parent = [
	'./src/css/scss/parent.scss'
];
var styles = [
	// './node_modules/bootstrap/scss/_functions.scss',
	// './node_modules/bootstrap/scss/_variables.scss',
	// './node_modules/bootstrap/scss/mixins/_breakpoints.scss',
	'./src/css/scss/*.scss'
];

gulp.task('scripts', function(){
	return new Promise(function(resolve, reject) {
	    gulp.src(scripts)
			.pipe(concat('all.min.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./static/js/'));
	    resolve();
	});
});

gulp.task('styles', function () {
	return new Promise(function(resolve, reject) {
	  gulp.src(styles_parent)
	    .pipe(sass())
	    .pipe(concatcss('all.min.css'))
	    .pipe(csso())
	    .pipe(gulp.dest('./static/css'));
	  resolve();
	});
});


gulp.task('watch',function(){
	return new Promise(function(resolve, reject) {
	  gulp.watch(styles, gulp.series("styles"));
	  gulp.watch(scripts, gulp.series("scripts"));
	  resolve();
	});
});

gulp.task('default', gulp.series (gulp.parallel('styles', 'scripts'/*, 'lint'*/), 'watch',
    function (done) { done(); }
));
