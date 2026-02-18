const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env.production || false;

    return {
        mode: isProduction ? 'production' : 'development',
        ...(isProduction ? {} : {
            watch: true,
            watchOptions: {
                poll: true,
                ignored: /node_modules/,
            },
        }),
        // cache: {
        //     type: 'filesystem',
        //     buildDependencies: {
        //         config: [__filename], // Track config changes
        //     },
        // },
        entry: {
            projects: './scripts/projects.js',
            bundle_shared: ['./scripts/custom_elements.js', './scripts/main.js'],
            bundle_dependencies: './scripts/external.js',
            styles: './styles/styles.css', // Entry point for Tailwind CSS
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader, // Extract CSS into separate files
                        {
                            loader: 'css-loader',
                            options: {
                                url: true, // Resolves URL imports
                                importLoaders: 1,
                            },
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        require('tailwindcss'),
                                        require('autoprefixer'),
                                    ],
                                },
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './pages/index.html', // Source HTML file
                filename: 'index.html', // Output HTML file
                chunks: ['bundle_shared', 'bundle_dependencies'], // specify javascript files to be injected
                inject: 'body', // Inject scripts into the <body> tag
                minify: !isProduction, // Minify for production
            }),
            new HtmlWebpackPlugin({
                template: './pages/projects.html', // Source HTML file
                filename: 'projects.html', // Output HTML file
                chunks: ['bundle_shared', 'bundle_dependencies', 'projects'], // specify javascript files to be injected
                inject: 'body', // Inject scripts into the <body> tag
                minify: !isProduction, // Minify for production
            }),
            new HtmlWebpackPlugin({
                template: './pages/insights.html', // Source HTML file
                filename: 'insights.html', // Output HTML file
                chunks: ['bundle_shared', 'bundle_dependencies'], // specify javascript files to be injected
                inject: 'body', // Inject scripts into the <body> tag
                minify: !isProduction, // Minify for production
            }),
            new HtmlWebpackPlugin({
                template: './pages/hobbies/3dprinting.html', // Source HTML file
                filename: 'hobbies/3dprinting.html', // Output HTML file
                chunks: ['bundle_shared', 'bundle_dependencies'], // specify javascript files to be injected
                inject: 'body', // Inject scripts into the <body> tag
                minify: !isProduction, // Minify for production
            }),
            new HtmlWebpackPlugin({
                template: './pages/hobbies/sports.html', // Source HTML file
                filename: 'hobbies/sports.html', // Output HTML file
                chunks: ['bundle_shared', 'bundle_dependencies'], // specify javascript files to be injected
                inject: 'body', // Inject scripts into the <body> tag
                minify: !isProduction, // Minify for production
            }),
            new MiniCssExtractPlugin({
                filename: 'styles/[name]_tailwind.css', // Output CSS file
            }),
            // // Copy CSS files from src/styles to dist/styles
            // new CopyWebpackPlugin({
            //     patterns: [
            //         { from: 'styles/**/*.css', to: 'styles/[name][ext]' }, // Match all .css files in styles folder
            //     ],
            // }),
        ],
        // optimization: {
        //     splitChunks: {
        //         chunks: 'all', // optional, helps deduplicate shared code
        //     },
        // },
        devtool: isProduction ? false : 'source-map',
        devServer: {
            static: {
                directory: path.resolve(__dirname, 'dist'),
            },
            compress: true,
            port: 9000,
            open: true, // Open the browser automatically
            hot: false,
            liveReload: true,
            watchFiles: {
                paths: ['pages/**/*.html', 'scripts/**/*.js', 'styles/**/*.css'],
                options: {
                    usePolling: true,
                },
            },
        },
    };
};