var gulp = require('gulp');
var del = require('del');

var $ = require('gulp-load-plugins')();

var config = require("./config"); //載入相同目錄下此名稱的檔案

gulp.task('default', function() {
  return gulp.src('app/app.module.js')
    .pipe($.webpack())
    .pipe($.rename('app.js'))
    .pipe(gulp.dest('app'))
    .pipe($.uglify({mangle:false}))
    .pipe($.rename({ extname: '.min.js' }))
    .pipe(gulp.dest('app'));
});

// gulp.task('default',['mytask1'], function() {
// 	// place code for your default task here
// 	console.log('My Default task');
// });

// gulp.task('mytask1',['mytask2'],function() {
//     console.log('Task1 Output');
// });

// gulp.task('mytask2',function() {
//     console.log('Task2 Output');
// });

// gulp.task('output1', function() {
//     gulp.src("assets/vendor/bootstrap/**/*.js")
//       .pipe(gulp.dest('output1'));
// });

// gulp.task('output3', function() {
//     gulp.src(["assets/vendor/**/*.js","assets/vendor/**/*.css"],{
//     	base:"assets/vendor"
//     })
//     .pipe(gulp.dest('output3'));
// });

// gulp.task('output3-1', function() {
//     gulp.src([
//     	"assets/vendor/angular/angular*.js",
//     	"assets/vendor/angular-animate/angular-*.js"
//     ],{
//     	base:"assets/vendor/"
//     })
//     .pipe(gulp.dest('output3-1'));
// });

// gulp.task('output2',['clean'], function() {
//     gulp.src("assets/vendor/bootstrap/**/*.js",{
//     	base:"assets/vendor"
//     })
//     .pipe(gulp.dest('output2'));
// });

// gulp.task('clean',function(cb) {
// 	//此語法會把bootstrap目錄也一併刪除
// 	//del(["output2/bootstrap/**"]); 
	
// 	//此語法會保留bootstrap目錄
// 	//del(["output2/bootstrap/**","!output2/bootstrap"])
	
//     del(["output2/bootstrap/**"])
//     .then(function (paths) {
//     	console.log('Deleted files/folders:\n', paths.join('\n'));
// 	})
// 	.then(cb);
// });

// gulp.task('watch', function() {
//     gulp.watch(config.appPath + '/**/*.js', ['concat-app']);
// });

// gulp.task('concat-app',function() {
//     gulp.src(config.appPath+'/**/*.module.js')
//       .pipe(gulp.dest('src/app'))
//       .pipe($.concat('app.modules.js'))
//       .pipe(gulp.dest('assets'))
//       .pipe($.uglify())
//       .pipe($.rename({ extname: '.min.js' }))
//       .pipe(gulp.dest('assets'));

//     gulp.src([config.appPath+'/**/*.js','!' + config.appPath+ +'/**/*.module.js'])
//       .pipe(gulp.dest('src/app'))
//       .pipe($.concat('app.bundles.js'))
//       .pipe(gulp.dest('assets'))
//       .pipe($.uglify({mangle:false}))
//       .pipe($.rename({ extname: '.min.js' }))
//       .pipe(gulp.dest('assets'));
// });