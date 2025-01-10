const gulp = require('gulp')
// const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
// const webp = require('imagemin-webp');
const postcss = require('gulp-postcss')
const clean = require('gulp-clean')
const extReplace = require('gulp-ext-replace')
const htmlmin = require('gulp-htmlmin')
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create() // Optionally use BrowserSync for better browser sync

const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackDevServer = require('webpack-dev-server')

// Paths to project files
const paths = {
    general: {
        src: './',
        dest: 'dist',
    },
    html: {
        src: 'pages/index.html',
        dest: 'dist/assets',
    },
    images: {
        src: 'assets/**/*.{png,jpg,jpeg,gif,svg,webp}',
        dest: 'dist/assets',
    },
    scripts: {
        src: 'scripts/**/*.js',
        dest: 'dist',
    },
    styles: {
        src: 'styles/styles.css',
        dest: 'dist/styles',
    },
}

// Determine the execution mode
const isProduction = process.env.NODE_ENV === 'production'

// Webpack Configuration
const webpackConfig = require('./webpack.config.js')({ production: isProduction });

// Clean dist folder
gulp.task('clean', function () {
    return gulp.src('dist', { allowEmpty: true, read: false }).pipe(clean())
})

// Task to move HTML files
// gulp.task('html', function () {
//     return gulp
//         .src(['pages/**/*.html']) // Source HTML files
//         .pipe(htmlmin({ collapseWhitespace: true })) // Optional: Minify HTML
//         .pipe(gulp.dest('dist')) // Output folder
// })

// Post-CSS process, compile with TailwindCSS
gulp.task('styles-compile', function () {
    return gulp
        .src(paths.styles.src)
        .pipe(postcss([tailwindcss, autoprefixer]))
        .pipe(rename({ basename: 'styles_tailwind' }))
        .pipe(gulp.dest(paths.styles.dest));
})

// Optimize images
gulp.task('images', function () {
    return (
        gulp
            .src(paths.images.src, { encoding: false })
            //.pipe(imagemin())
            //.pipe(extReplace('.webp'))
            .pipe(gulp.dest(paths.images.dest))
    )
})

// Use Webpack for JavaScript bundling and html injection
gulp.task('webpack-build', function () {
    return gulp
        .src(paths.scripts.src)
        .pipe(webpackStream(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest))
    // .on('end', () => {
    //     browserSync.init({
    //         server: {
    //         baseDir: './dist', // Serve files from dist directory
    //         },
    //         open: true, // Open the browser automatically
    //         notify: false, // Disable browser notifications
    //     });
    // });
})

// Webpack Development Server Task
gulp.task('webpack-server', (done) => {
    const compiler = webpack(webpackConfig)
    const server = new webpackDevServer(webpackConfig.devServer, compiler)

    // Start Webpack DevServer and open the browser in development mode
    if (!isProduction) {
        server.startCallback(() => {
            console.log('Webpack dev server started!')
        })
    }
    done() // Complete the Gulp task
})

// Watch Files for Changes
gulp.task('watch', function () {
    //gulp.watch(paths.styles.src, gulp.series('styles'))
    gulp.watch(paths.scripts.src, gulp.series('webpack-build'))
    gulp.watch(paths.images.src, gulp.series('images'))
})

// Main build tasks
gulp.task('build-dev', gulp.series('images', 'webpack-server'))
// gulp.task('build-dev', gulp.series(gulp.parallel('images', 'styles-compile'), 'webpack-build'))
gulp.task('build', gulp.series(gulp.parallel('images', 'styles-compile'), 'webpack-build'))
