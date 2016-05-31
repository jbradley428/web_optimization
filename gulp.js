//VARIABLES

//Tells Node to look in the node_modules folder for a package named 'gulp'
var gulp = require('gulp');
var sass = require('gulp-sass');



//TASKS
//basic gulp task = gulp.task('task-name', function() {...});
gulp.task('sass', function() {//compile sass to css
  return gulp.src('../src/scss/styles.scss')//source files
    .pipe(sass())//convert sass to css wih gulp-sass plugin
    .pipe(gulp.dest('../src/css'))//destination of compiled css
});
