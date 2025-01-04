const gulp = require('gulp');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
// const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
// const webp = require('imagemin-webp');
const clean = require('gulp-clean');
const extReplace = require('gulp-ext-replace');
const htmlmin = require('gulp-htmlmin');

const CopyWebpackPlugin = require('copy-webpack-plugin');

// Webpack Configuration
const webpackConfig = {
  mode: 'production',
  entry: './scripts/script.js',
  output: {
    filename: 'script.js',
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
    // Copy CSS files from src/styles to dist/styles
    new CopyWebpackPlugin({
      patterns: [
        { from: 'styles/**/*.css', to: '../styles/[name][ext]' },  // Match all .css files in styles folder
      ],
    }),
  ],
};

// Clean Dist Folder
gulp.task('clean', function () {
  return gulp.src('dist', { allowEmpty: true, read: false }).pipe(clean());
});

// Process SCSS
// gulp.task('styles', function () {
//  return gulp.src('styles/**/*.scss')
//    .pipe(sass({ outputStyle: 'compressed' }))
//    .pipe(gulp.dest('dist/styles'));
//});

// Task to move HTML files
gulp.task('html', function() {
  return gulp.src(['./index.html', './projects.html']) // Source HTML files
    .pipe(htmlmin({ collapseWhitespace: true })) // Optional: Minify HTML
    .pipe(gulp.dest('dist')); // Output folder
});

// Optimize Images
gulp.task('images', function () {
  return gulp.src('assets/**/*')
    .pipe(imagemin())
    //.pipe(extReplace('.webp'))
    .pipe(gulp.dest('dist/assets'));
});

// Use Webpack for JavaScript Bundling
gulp.task('bundle', function () {
  return gulp.src('scripts/script.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('dist/scripts'));
});

// Watch Files for Changes
gulp.task('watch', function () {
  // gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('scripts/**/*.js', gulp.series('bundle'));
  gulp.watch('assets/**/*', gulp.series('images'));
});

// Build task: collection of tasks
gulp.task('build', gulp.series(
  'html',
  gulp.parallel('images', 'bundle')
));