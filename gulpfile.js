var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('build', function() {
	gulp.src(['src/app.js', 'src/data*'])
		.pipe(concat('main.js'))
		.pipe(gulp.dest('js/'))
});
