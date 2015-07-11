import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cssnano from 'gulp-cssnano';
import browserSync from 'browser-sync';

const reload = browserSync.reload;

gulp.task('bs', ['styles'], () => {
    browserSync({
        server: {
            baseDir: 'demo'
        },
        browser: ['google chrome canary']
    });

    gulp.watch(['index.html'], reload);
    gulp.watch(['css/*.styl'], ['styles', reload]);
});

gulp.task('styles', () => {
    return gulp.src('demo/**/*.styl')
        .pipe(stylus({
            use: nib(),
            "import": ["nib"],
            compress: false
         }))
        .pipe(postcss([
          lost()
        ]))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('demo/'));
});

gulp.task('default', ['bs']);