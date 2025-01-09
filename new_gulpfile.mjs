import { src, dest, watch } from 'gulp'
import less from 'gulp-less'
import babel from 'gulp-babel'
import concat from 'gulp-concat'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'
import cleanCSS from 'gulp-clean-css'
import del from 'del'

const paths = {
    images: {
        src: 'assets/**/*.{png,jpg,jpeg,gif,svg,webp}',
        dest: 'dist/assets',
    },
    styles: {
        src: 'styles/**/*.css',
        dest: 'dist/styles',
    },
    scripts: {
        src: 'src/scripts/**/*.js',
        dest: 'assets/scripts/',
    },
}

/*
 * For small tasks you can export arrow functions
 */
export const clean = () => del(['dist'])

// Tasks for assets, CSS and JavaScript files
export function styles() {
    return (
        src(paths.styles.src)
            .pipe(less())
            .pipe(cleanCSS())
            // pass in options to the stream
            .pipe(
                rename({
                    basename: 'main',
                    suffix: '.min',
                })
            )
            .pipe(dest(paths.styles.dest))
    )
}

export function scripts() {
    return src(paths.scripts.src, { sourcemaps: true })
        .pipe(babel())
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest(paths.scripts.dest))
}

// Optimize images
export function images() {
    return (
        src(paths.images.src, { encoding: false })
            //.pipe(imagemin())
            //.pipe(extReplace('.webp'))
            .pipe(dest(paths.images.dest))
    )
}

/*
 * You could even use `export as` to rename exported tasks
 */
function watchFiles() {
    watch(paths.scripts.src, scripts)
    watch(paths.styles.src, styles)
}
export { watchFiles as watch }

const build = gulp.series(clean, gulp.parallel(images, scripts))
/*
 * Export a default task
 */
export default build
