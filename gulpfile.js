var gulp = require('gulp');
gulp.task('default',['mytask1','mytask2'], function() {
	// place code for your default task here
	console.log('My Default task');
});

gulp.task('mytask1',function() {
    console.log('Task1 Output');
});

gulp.task('mytask2',function() {
    console.log('Task2 Output');
});