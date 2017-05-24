/*First load the gulp plug-in using Node.js*/
var gulp = require('gulp'),
    /*Also set up variables for the various plug-ins needed in this project's build process.*/
    del = require('del'), //This isn't a Nodejs stream, so later it has to be wrapped within the `vinyl-paths` stream.
    clean_css = require('gulp-clean-css'),
    delete_file = require('gulp-delete-file'),
    filter = require('gulp-filter'),
    strip_debug = require('gulp-strip-debug'),
    vinyl_paths = require('vinyl-paths'),

    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin');
    //gulp-clean
    //gulp-compress

//Missing
//webpack-stream

/*First building my own "copy" task which will blanket copy all files from src/ to dist/ folder:*/
gulp.task('copy', function() {
      gulp.src(['src/**/*', '!src/index.html', '!src/css/style.css', '!src/js/**/*']) //RUNNING gulp.src PRODUCES A SPEED COST.
        .pipe(gulp.dest('dist'));//grabs whatever .src() points at, and .pipes it over to .dest()
});

/*Removing whitespace from Cameron HTML file*/
gulp.task('minifyHTML', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(rename('index.html')) //Necessary to overwrite original file.
    .pipe(gulp.dest('dist'));
});

/*Cleaning the Cameron CSS file*/
gulp.task('cleanNewCSS', function() {
    return gulp.src('src/css/style.css') //You have to return something.
        .pipe(clean_css({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(rename('style.css')) //rename() has to come before gulp.dest()
        .pipe(gulp.dest('dist/css'))
});

/*Concatenating and uglifying the Cameron javascript files*/
gulp.task('concatJS', function() {
    return gulp.src('src/js/*') //You have to return something.
      .pipe(concat('concatted1.js'))
      .pipe(rename('renamedconcatted1.js'))
      .pipe(uglify())
      .pipe(rename('perfmatters.js'))
      .pipe(gulp.dest('dist/js'));
});

/*Default runner task for Gulp, executed when the user calls `gulp` from the terminal.*/
gulp.task('default', [
    'copy',
    'minifyHTML',
    'cleanNewCSS',
    'concatJS',
    ],
  function(){}
);

/*NOTES ON GULP*/
/* You can pass arrays, or use globs with src and dest:*/
// gulp.src(folder/*.html) - will match all the HTML files in folder
// gulp.src(root/**/*.html) - will match all the HTML files in all the folders from root to its children
