const gulp = require('gulp');
const webpack = require('webpack-stream');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

// Webpack Configuration
const webpackConfig = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
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

// Optimize Images
gulp.task('images', function () {
  return gulp.src('assets/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets'));
});

// Use Webpack for JavaScript Bundling
gulp.task('scripts', function () {
  return gulp.src('scripts/script.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist/scripts'));
});

// Watch Files for Changes
gulp.task('watch', function () {
  // gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
  gulp.watch('scripts/**/*.js', gulp.series('scripts'));
  gulp.watch('assets/**/*', gulp.series('images'));
});

// Build task: collection of tasks
gulp.task('build', gulp.series(
  gulp.parallel('images', 'scripts'),
  'watch'
));