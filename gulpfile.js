'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

//scss
gulp.task('sass', function () {
    return gulp.src('app/scss/*.sass')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('build/css/'));
});

//watch
gulp.task('watch', function() {
    gulp.watch('app/scss/*.sass', ['sass'])
});


//default
gulp.task('default', ['watch', 'sass']);