const os = require('os');
const path = require('path');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({size: os.cpus().length});
const happyPlugins = [];
const plugins = [{
    id: 'babel',
    loaders: [{
        loader: 'babel-loader',
        options: {
            babelrc: false,
            extends: path.resolve(__dirname, './.babelrc')
        }
    }]
}
];
plugins.map(plugin => {
    plugin.loaders.query = {
        cacheDirectory: true,
    };
    plugin.threadPool = happyThreadPool;
    plugin.verbose = true;
    happyPlugins.push(new HappyPack(plugin));

});
module.exports = happyPlugins;
