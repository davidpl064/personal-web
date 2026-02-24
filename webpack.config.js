const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env.production || false;

    // Define source html pages
    const pages = [
        { name: 'index', path: 'index.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
        { name: 'insights', path: 'insights.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
        { name: '3dprinting', path: 'hobbies/3dprinting.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
        { name: 'sports', path: 'hobbies/sports.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
        { name: 'contact', path: 'contact.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
        { name: 'projects', path: 'projects/index.html', chunks: ['bundle_shared', 'bundle_dependencies', 'projects'] },
        { name: 'infotaxis', path: 'projects/infotaxis.html', chunks: ['bundle_shared', 'bundle_dependencies'] },
    ];

    const htmlPlugins = pages.map(p => new HtmlWebpackPlugin({
        template: `./pages/${p.path}`,
        filename: (() => {
            // Convert to folder/index.html
            const parts = p.path.split('/')
            const file = parts.pop().replace('.html', '')
            let outputFileName;
            if (file === 'index') {
                // Already set index files
                outputFileName = parts.length ? `${parts.join('/')}/${file}.html` : `${file}.html`
            } else {
                // Nested pages become folder/index.html
                outputFileName = parts.length ? `${parts.join('/')}/${file}/index.html` : `${file}/index.html`
            }
            return outputFileName
        })(),
        chunks: p.chunks,
        inject: 'body',
        minify: !isProduction,
    }));

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
                                    plugins: {
                                        "@tailwindcss/postcss": {}
                                    },
                                },
                            },
                        },
                    ],
                },
                {
                    // Write assets to output dist "assets"
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[hash][ext]',
                    },
                },
            ],
        },
        plugins: [
            ...htmlPlugins,
            new MiniCssExtractPlugin({
                filename: 'styles/[name]_tailwind.css',
            }),
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