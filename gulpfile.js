var gulp = require('gulp');
var browserSync = require('browser-sync');

const reload = browserSync.reload;

gulp.task('bs', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        browser: ['google chrome canary']
    });

    gulp.watch(['index.html'], reload);
    gulp.watch(['css/*.css'], reload);
});

gulp.task('default', ['bs']);