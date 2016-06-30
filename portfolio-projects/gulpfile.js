//Step 1 require all depenencies
// gls = "gulp live server"

var gulp    = require('gulp'),
	gls     = require('gulp-live-server'),
	less    = require('gulp-less'),
	uglify  = require('gulp-uglify'),
	minify  = require('gulp-minify'),
    jshint  = require('gulp-jshint'),
    stylish = require('jshint-stylish');


///////////////////////////////////////////

//create a server task

gulp.task('server', function() { 
  var server = gls('./src/app.js');

  server.start();

  gulp.watch(['./src/app.js', 'gulpfile.js'], function() {
  	server.start.bind(server)()
  });
});

////////////////////////////////////////////

// Transpile less to css

gulp.task('less', function() {
  gulp.src('./src/public/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./src/public/css'));
});


///////////////////////////////////////////////////////

// Minify

// NEED TO MESS AROUND WITH FILE AND SRC AND min

gulp.task('minify', function() {
  gulp.src('./src/app.js')
    .pipe(minify({
        ext:{
            src:'-debug.js',
            min:'.js'
        },
        exclude: ['tasks'],
        ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('dist'))
});
/////////////////////////////////////////////////////
///// JSHINT

gulp.task('jshint', function() {
  gulp.src(['./src/index.js', './src/public/js/**/*.js', '!./server/public/vendor/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});




/////////////////////////////////////////////////////
// Watch Files

gulp.task('watch', function() {
	gulp.watch(['./src/public/less/**/*.less'], ['less']);
	//gulp.watch(...javascript)
})



/////////////////////////////////////////////



// Define our default task

// an array is passed to gulp.task which lets default task to know when you run
// you are running all the other tasks.

gulp.task('default', ['watch', 'server', 'jshint', 'minify', 'less']);




