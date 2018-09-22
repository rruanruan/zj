const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const happyPlugins = require('./happPackPlugins');
const SentryPlugin = require('@sentry/webpack-plugin');
const prodEnv = require('./prod.env');
console.log(prodEnv);
let resolve = dir => {
    return path.join(__dirname, '..', dir);
};
const config = {
    mode: 'development',
    entry: {
        polyfill: 'babel-polyfill',
        libs: ['vue', 'flex.css'],
        utils: ['axios', 'query-string', 'js-cookie']
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[id].chunk.js',
        publicPath: '../land/'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            vue$: 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                enforce: 'pre',
                exclude: [/node_modules/],
                use: [
                    'cache-loader',
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitError: true,
                            quiet: true,
                            formatter: require('eslint-friendly-formatter')
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: [
                    {
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
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'cache-loader',
                    {
                        loader: 'happypack/loader?id=babel'
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('node_modules/vue-echarts'), resolve('node_modules/resize-detector')]
            },
            {
                test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1000,
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(mp3|mp4|webm)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[hash:8].[ext]'
                        }
                    }
                ]
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
                },
                utils: {
                    test: 'utils',
                    name: 'utils',
                    chunks: 'initial'
                }
            }
        }
    },

    devtool: '#eval-source-map'
};

module.exports = (env = 'dev') => {
    let HtmlWebpack = [];
    let entry = {};
    let files = require('./filenames') || []; // 填写需要编译的js文件名
    let output = require('./output')[env];
    files.map(file => {
        let entryJS = file.name.replace('.js', '');
        entry[entryJS] = path.resolve(__dirname, `./views/${file.name}`);
        let htmlConfig = {
            title: file.title || '智能量化',
            env,
            favicon: path.resolve(__dirname, './images/logo.png'),
            chunks: ['polyfill', 'libs', 'utils', entryJS],
            chunksSortMode: 'manual',
            inject: 'body',
            filename: path.resolve(__dirname, `${output.path}/${entryJS}.html`),
            template: path.resolve(__dirname, './index.ejs'),
            minify: {
                //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true //删除空白符与换行符
            }
        };
        HtmlWebpack.push(new HtmlWebpackPlugin(htmlConfig));
    });
    config.entry = { ...config.entry, ...entry };
    config.plugins = [...HtmlWebpack];
    config.plugins = (config.plugins || []).concat(happyPlugins);
    config.output.path = path.resolve(__dirname, `${output.path}/land`);
    if (env === 'prod' || env === 'stage' || env === 'test') {
        console.log('------->', env);
        config.devtool = '#nosource-source-map';
        config.mode = 'production';

        config.output.filename = `[name].[chunkhash:8].js`;
        config.output.chunkFilename = `[name].[chunkhash:8].js`;
        config.plugins = (config.plugins || []).concat([
            new webpack.DefinePlugin({
                'process.env': {
                    ipalfish: JSON.stringify(env),
                    RELEASE_VERSION:JSON.stringify(prodEnv.RELEASE_VERSION)
                }
            }),
            new webpack.HashedModuleIdsPlugin({
                hashFunction: 'sha256',
                hashDigest: 'hex',
                hashDigestLength: 20
            }),
            new SentryPlugin({
                include: path.resolve(__dirname, `${output.path}/land`),
                release: prodEnv.RELEASE_VERSION,
                configFile: path.resolve(__dirname, './.sentryclirc'),
                urlPrefix: '~/land/' // 如果不需要也可以不传这个参
            })
        ]);
    }
    return config;
};
