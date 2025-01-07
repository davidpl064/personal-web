const path = require('path')

const gulp = require('gulp')
// const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin')
// const webp = require('imagemin-webp');
const clean = require('gulp-clean')
const extReplace = require('gulp-ext-replace')
const htmlmin = require('gulp-htmlmin')
const browserSync = require('browser-sync').create() // Optionally use BrowserSync for better browser sync

const webpack = require('webpack')
const webpackStream = require('webpack-stream')
const webpackDevServer = require('webpack-dev-server')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
        dest: 'dist/scripts',
    },
    styles: {
        src: 'styles/**/*.css',
        dest: 'dist/styles',
    },
}

// Determine the execution mode
const isProduction = process.env.NODE_ENV === 'production'

// Webpack Configuration
const webpackConfig = {
    mode: isProduction ? 'production' : 'development',
    entry: {
        bundle_main: ['./scripts/custom_elements.js', './scripts/projects.js', './scripts/main.js'],
        bundle_dependencies: './scripts/external.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/scripts'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pages/index.html', // Source HTML file
            filename: '../index.html', // Output HTML file
            // chunks: ['main'], specify javascript files to be injected
            inject: 'body', // Inject scripts into the <body> tag
            minify: !isProduction, // Minify for production
        }),
        new HtmlWebpackPlugin({
            template: './pages/projects.html', // Source HTML file
            filename: '../projects.html', // Output HTML file
            // chunks: ['main'], specify javascript files to be injected
            inject: 'body', // Inject scripts into the <body> tag
            minify: !isProduction, // Minify for production
        }),
        // Copy CSS files from src/styles to dist/styles
        new CopyWebpackPlugin({
            patterns: [
                { from: 'styles/**/*.css', to: '../styles/[name][ext]' }, // Match all .css files in styles folder
            ],
        }),
        // Copy CSS files from src/styles to dist/styles
        // new CopyWebpackPlugin({
        //     patterns: [
        //         { from: 'scripts/custom_elements.js', to: '../scripts/[name][ext]' }, // Match all .css files in styles folder
        //     ],
        // }),
    ],
    devtool: isProduction ? false : 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true, // Open the browser automatically
    },
}

// Clean Dist Folder
gulp.task('clean', function () {
    return gulp.src('dist', { allowEmpty: true, read: false }).pipe(clean())
})

// Process SCSS
// gulp.task('styles', function () {
//  return gulp.src('styles/**/*.scss')
//    .pipe(sass({ outputStyle: 'compressed' }))
//    .pipe(gulp.dest('dist/styles'));
//});

// Task to move HTML files
// gulp.task('html', function () {
//     return gulp
//         .src(['pages/**/*.html']) // Source HTML files
//         .pipe(htmlmin({ collapseWhitespace: true })) // Optional: Minify HTML
//         .pipe(gulp.dest('dist')) // Output folder
// })

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
    gulp.watch(path.styles.src, gulp.series('styles'))
    gulp.watch(paths.scripts.src, gulp.series('webpack-build'))
    gulp.watch(paths.images.src, gulp.series('images'))
})

// Build task: collection of tasks
gulp.task('build', gulp.series(gulp.parallel('images', 'webpack-build'), 'webpack-server'))
