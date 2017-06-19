
    /*Variables*/
    
var gulp                = require('gulp');
var sass                = require ('gulp-sass');
var browserSync         = require('browser-sync');

    /*Tasks*/

gulp.task('pre_sass_css',function(){
    return gulp.src('app/sass/main.scss')
           .pipe(sass())
           .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
           .pipe(gulp.dest('app/css'))
           .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function(){
    browserSync({
        server:{
            baseDir:'app'
        },
    notify:false
    });
});

gulp.task('watch',['browser-sync','pre_sass_css'], function(){
    gulp.watch('app/sass/**/*.scss', ['pre_sass_css']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});