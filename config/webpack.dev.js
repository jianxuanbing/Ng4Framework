const helpers = require('./helpers');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

// webpack plugins
const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

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
const proxyApi = 'http://localhost:8098'

module.exports = function(options) {
    return webpackMerge(commonConfig({ env: ENV }), {
        //metadata: METADATA,
        devtool: 'cheap-module-eval-source-map',
        output: {
            path: helpers.root('dist'), // 出口路径
            publicPath: '/',
            filename: '[name].bundle.js', // 出口名称
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
                debug: true,
                options: {
                    context: helpers.root('src'),
                    output: {
                        path: helpers.root('dist')
                    },
                    tslint: {
                        emitErrors: false,
                        failOnHint: false,
                        resourcePath: 'src'
                    }
                }
            }),
            // 自动打开浏览器
            new OpenBrowserPlugin({
                url: 'http://' + METADATA.host + ':' + METADATA.port
            }),
        ],
        devServer: {
            port: METADATA.port,
            host: METADATA.host, // 启动端口号
            // 监视contentBase文件更改，则整个页面重新加载
            watchContentBase: true,
            contentBase: helpers.root('dist'),
            historyApiFallback: {
                index: '/index.html'
            },
            // 监视配置
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            proxy: {
                // '/api': {
                //     target: proxyApi,
                //     secure: false,
                //     changeOrigin: true,
                //     pathRewrite: {
                //         '^/api': ''
                //     }
                // }
                '/api/*': proxyApi
            }
        },
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    });
}