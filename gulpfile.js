var gulp = require ('gulp'),
    sass = require ('gulp-sass'),
    browserSync = require ('browser-sync');
const autoprefixer = require ('gulp-autoprefixer');

gulp.task('scss', function (){
    return gulp.src('./sass/*.sass')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('autoprefix', function (){
    gulp.src('css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
});

gulp.task('browser-sync', function (){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('watch', function (){
    gulp.watch('./sass/*.sass', gulp.parallel('scss'));
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));