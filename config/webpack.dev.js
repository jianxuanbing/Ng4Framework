const helpers = require('./helpers');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');

// webpack constants
const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9060;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({ env: ENV }).metadata, {
    host: HOST,
    port: PORT,
    ENV: ENV,
    HMR: HMR
});

module.exports = function(options) {
    return webpackMerge(commonConfig({ env: ENV }), {
        //metadata: METADATA,
        devtool: 'cheap-module-source-map',
        output: {
            path: helpers.root('dist'),
            filename: '[name].bundle.js',
            sourceMapFilename: '[name].map',
            chunkFilename: '[id].chunk.js',
            library: 'ac_[name]',
            libraryTarget: 'var'
        },
        plugins: [
            new DefinePlugin({
                'ENV': JSON.stringify(METADATA.ENV),
                'HMR': METADATA.HMR,
                'process.env': {
                    'ENV': JSON.stringify(METADATA.ENV),
                    'NODE_ENV': JSON.stringify(METADATA.ENV),
                    'HMR': METADATA.HMR
                }
            }),
            new NamedModulesPlugin(),
            new webpack.LoaderOptionsPlugin({
                debug: true
            })
        ],
        // tslint: {
        //     emitErrors: false,
        //     failOnHint: false,
        //     resourcePath: 'src'
        // },
        devServer: {
            port: METADATA.port,
            host: METADATA.host,
            historyApiFallback: true,
            // 监视配置
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            // 监视contentBase文件更改，则整个页面重新加载
            watchContentBase: true,
            contentBase: helpers.root('dist')
        },
        // node: {
        //     global: 'window',
        //     crypto: 'empty',
        //     process: true,
        //     module: false,
        //     clearImmediate: false,
        //     setImmediate: false
        // }
    });
}