const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
let env = process.env.webpackEnv || 'prod';
console.log('env---------', env);
let prodConfig = {
    watch: false,
    mode: 'production',
    devtool: ''
};
let config = Object.assign(baseConfig, { ...prodConfig });
module.exports = () => {
    let HtmlWebpack = [];
    let entry = {};
    let files = require('./filenames') || []; // 填写需要编译的js文件名
    let output = require('./output')[env];
    files.map(file => {
        let entryJS = file.name.replace('.js', '');
        entry[entryJS] = path.resolve(__dirname, 'views', `${file.name}`);
        let chunks = ['polyfill', 'libs', entryJS];

        /*
        HtmlWebpackPlugin 插件将 desk/views/*
        下的js作为入口文件打包生成对应的html文件
        * */
        let htmlConfig = {
            env,
            chunks,
            title: file.title || '智能量化',
            favicon: path.resolve(__dirname, './images/logo.png'),
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
    config.output.filename = `[name].[chunkhash:8].js`;
    config.output.chunkFilename = `[name].[chunkhash:8].js`;
    config.plugins = (config.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.HashedModuleIdsPlugin({
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20
        })
    ]);
    config.output.path = path.resolve(__dirname, `${output.path}/`);
    return config;
};
