const gulp = require('gulp');
plugins = require('gulp-load-plugins')();

//obviously the default task gulp looks for when ran
gulp.task('default', function(){
	console.log('WOOOOOOW');
});

//compile SASS to CSS
gulp.task('css', function(){
	return gulp.src(['./src/sass/main.scss'])
	.pipe(plugins.sourcemaps.init())
	.pipe(plugins.sass().on('error', plugins.sass.logError))
	.pipe(plugins.cssmin())
	.pipe(plugins.autoprefixer())
	.pipe(plugins.sourcemaps.write())
	.pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function(){
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
		'./src/js/main.js',
		'./src/js/login.js'
		])
	.pipe(plugins.uglify())
	.pipe(gulp.dest('./dist/js'));
});
