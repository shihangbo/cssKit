
// 引入依赖
var gulp = require('gulp'),
    less = require('gulp-less'),
    rename = require('gulp-rename')
    minifycss = require('gulp-minify-css')

// 定义变量
var DEST = 'dist/'

// 创建task
gulp.task('testLess', function() {
  gulp.src('src/csskit.less')
      .pipe(less())
      .pipe(gulp.dest(DEST))
      .pipe(minifycss())
      .pipe(rename({ extname: '.min.css' }))
      .pipe(gulp.dest(DEST));
})

gulp.task('default', ['testLess'])