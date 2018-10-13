const path = require('path');


const config = {
    bail: true,
    target: 'web',
    entry: {
        polyfill: 'babel-polyfill',
        libs: ['vue', 'flex.css', 'axios', 'query-string', 'js-cookie']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            utils: path.resolve(__dirname,  'utils'),
            images: path.resolve(__dirname, 'images'),
            less: path.resolve(__dirname, 'less'),
            components: path.resolve(__dirname, 'components'),
            containers: path.resolve(__dirname, 'containers')
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                enforce: 'pre',
                exclude: [/node_modules/],
                use: {
                    loader: 'eslint-loader',
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                }
            },
            {
                test: /\.vue$/,
                use: {
                    loader: 'vue-loader',
                    options: {
                        // ...
                        postcss: [
                            require('precss'),
                            require('autoprefixer')({
                                browsers: ['last 2 versions', 'iOS 7']
                            })
                        ]
                    }
                }
            },
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        extends: path.resolve(__dirname, './.babelrc')
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'fonts/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.(mp3|mp4|webm)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name].[hash:8].[ext]'
                    }
                }
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            modules: false
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            modules: false
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            minSize: 30000,
            minChunks: 2,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                polyfill: {
                    test: 'polyfill',
                    name: 'polyfill',
                    chunks: 'initial'
                },
                libs: {
                    test: 'libs',
                    name: 'libs',
                    chunks: 'initial'
                }
            }
        }
    }
};

module.exports = config;
