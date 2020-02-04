'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass');


gulp.task('sass', function () {
    return gulp.src('assets/scss/**/*.scss') //regarde toutes les fichiers
        .pipe(sass()) //permet l'utilisation de gulp sass
        .pipe(gulp.dest('assets/css')) // tu vas le compiler à cet endroit
});

gulp.task('watch', function () {
    gulp.watch('assets/**/*.scss',
        gulp.parallel('sass')); //permet de regarder les taches dans terminal
});

gulp.task('default', gulp.parallel('sass', 'watch')); //reunis toutes les taches indiquer
