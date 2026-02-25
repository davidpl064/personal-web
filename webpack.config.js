const path = require('path')
const fs = require('fs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = (env) => {
    const isProduction = env.production || false;

    const headContent = fs.readFileSync(path.resolve(__dirname, 'partials/head.html'), 'utf-8')
    // Absolute path to project root
    const projectRootPath = path.resolve(__dirname)

    // Define which bundles go to which pages
    const pageBundles = {
        index_home: ['bundle_shared', 'bundle_dependencies'],
        index_projects: ['bundle_shared', 'bundle_dependencies', 'projects'],
        '3dprinting': ['bundle_shared', 'bundle_dependencies'],
        sports: ['bundle_shared', 'bundle_dependencies'],
    }

    function getPages() {
        const pagesDir = path.resolve(__dirname, 'pages')
        const pages = []

        function readDir(dir, parent = '') {
            const entries = fs.readdirSync(dir, { withFileTypes: true })
            for (const entry of entries) {
                const fullPath = path.join(dir, entry.name);
                const relPath = parent ? `${parent}/${entry.name}` : entry.name
                if (entry.isDirectory()) readDir(fullPath, relPath)
                else if (entry.isFile() && entry.name.endsWith('.html')) {
                    const fileName = entry.name.replace('.html', '')
                    let outputFilePath
                    if (fileName.includes("index")) {
                        // Already set index files
                        outputFilePath = parent ? `${parent}/index.html` : `index.html`
                    } else {
                        outputFilePath = parent ? `${parent}/${fileName}/index.html` : `${fileName}/index.html`
                    }
                    const relativePath = path.relative(projectRootPath, fullPath)
                    pages.push({
                        name: fileName,
                        file: fullPath,
                        relFilePath: relativePath,
                        outputPath: outputFilePath
                    })
                }
            }
        }

        readDir(pagesDir)
        return pages
    }

    const pages = getPages()
    const htmlPlugins = pages.map(p => new HtmlWebpackPlugin({
        template: './layouts/base.html',
        filename: p.outputPath,
        templateParameters: {
            // head: headContent,
            // html: fs.readFileSync(p.file, 'utf-8')  // inject content over base layout
            head: path.resolve(__dirname, 'partials/head.html'),
            pageContent: require(p.file),
        },
        chunks: pageBundles[p.name] || ['bundle_shared', 'bundle_dependencies'],
        inject: 'body',  // inject bundles at the end of <body>
        minify: !isProduction,
    }))

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
            clean: true // remove old files before build
        },
        module: {
            rules: [
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                    exclude: /base\.html$/,
                    options: {
                        esModule: false,
                        sources: false
                    }
                },
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
                paths: ['layouts/**/*.html', 'partials/**/*.html', 'pages/**/*.html', 'scripts/**/*.js', 'styles/**/*.css'],
                options: {
                    usePolling: true,
                },
            },
        },
    };
};