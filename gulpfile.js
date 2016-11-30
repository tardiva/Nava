(function() {
	'use strict';

	var gulp = require('gulp');
	var less = require('gulp-less');
	var cssMin = require('gulp-css');
	var rename = require('gulp-rename');
	var LessAutoprefix = require('less-plugin-autoprefix');
	var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions', 'iOS >= 7'] });

	gulp.task('less', function() {
		gulp.src('./assets/css/main.less')
			.pipe(less({
				plugins: [autoprefix]
			}))
			.pipe(gulp.dest('./assets/css/'))
			.pipe(cssMin())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('./assets/css/'));
	});

	gulp.task('less:watch', function() {
		gulp.watch('./assets/css/*.less', ['less']);
	});

	gulp.task('default', ['less']);
}());
