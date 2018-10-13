const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
/*
test
*/
let apiUrl = 'http://218.240.154.251:8082/';
/*
prod
*/
// apiUrl = 'http://121.41.27.91/';

let devConfig = {
    mode: 'development',
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, '_html'),
        hotOnly: true,
        port: 9001,
        host: '0.0.0.0',
        allowedHosts: ['.ipalfish.com'],
        https: {
            key: fs.readFileSync('server/server.key'),
            cert: fs.readFileSync('server/server.crt')
        },
        proxy: {
            '/api': {
                target: apiUrl,
                pathRewrite: { '^/api': '' }
            }
        }
    },
    watchOptions: {
        ignored: ['_html', 'node_modules']
    },
    devtool: 'cheap-module-source-map'
};
let config = Object.assign(baseConfig, { ...devConfig });
let env = process.env.webpackEnv || 'dev';
module.exports = () => {
    let HtmlWebpack = [];
    let entry = {};
    let files = require('./filenames') || []; // 填写需要编译的js文件名
    let output = require('./output')[env];
    files.map(file => {
        let entryJS = file.name.replace('.js', '');
        entry[entryJS] = path.resolve(__dirname, 'views', `${file.name}`);
        let chunks = ['polyfill', 'libs', entryJS];
        let htmlConfig = {
            env,
            chunks,
            title: file.title || '伴鱼英语',
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
    config.plugins.push(new webpack.HotModuleReplacementPlugin());
    config.output.path = path.resolve(__dirname, `${output.path}/`);

    return config;
};
