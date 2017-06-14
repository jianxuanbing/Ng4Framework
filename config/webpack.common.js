// 引入库
const helpers = require('./helpers');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('html-webpack-plugin');
//const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
//const HtmlElementsPlugin = require('./html-elements-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// webpack constants
const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
    title: 'ng4 jce',
    description: 'NG4基础框架',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function(options) {
    isProd = options.env === 'production';
    return {
        /**
         * index.html meta 静态数据
         */
        //metadata: METADATA,
        /**
         * 是否启用缓存,缓存生成模块和多个增量构建块来提高性能
         */
        cache: false,
        /**
         * 入口文件位置
         */
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'main': './src/main.ts',
        },
        /**
         * 配置解析模块路径
         */
        resolve: {
            /**
             * 指定模块的后缀，在引入模块时自动补全
             */
            extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html'],
            /**
             * 模块目录，告诉webpack解析模块时应该搜索的目录
             */
            modules: [
                helpers.root('src'),
                'node_modules'
            ],
            alias: {
                'src': path.resolve(__dirname, '../src'),
                'app': path.resolve(__dirname, '../src/app')
            }
        },
        /**
         * 配置模块解析器
         */
        module: {
            exprContextCritical: false,
            rules: [{
                test: /\.ts$/,
                loader: 'string-replace-loader',
                options: {
                    search: /(System|SystemJS)(.*[\n\r]\s*\.|\.)import\((.+)\)/g,
                    replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)'
                },
                include: [helpers.root('src')],
                enforce: 'pre'
            }, {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]
            }, {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.styl$/,
                loader: 'css-loader!stylus-loader'
            }, {
                test: /\.css$/,
                //loaders: ['to-string-loader', 'css-loader']
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            }, {
                test: /\.scss$/,
                loaders: ['to-string-loader', 'css-loader', 'sass-loader']
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                exclude: [helpers.root('src/index.html')]
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }, {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            }],

            // postLoaders: [{
            //     test: /\.js$/,
            //     loader: 'string-replace-loader',
            //     query: {
            //         search: 'var sourceMappingUrl=extractSourceMappingUrl\\(cssText\\);',
            //         replace: "var sourceMappingUrl='';",
            //         flags: 'g'
            //     }
            // }]
        },
        /**
         * 添加额外的编译器插件
         */
        plugins: [
            // 静态资源插件
            new AssetsPlugin({
                path: helpers.root('dist'),
                filename: 'webpack-asset.json',
                prettyPrint: true
            }),
            // 类型检查插件，在一个单独进程做类型检查，所有webpack不需要等待
            //new ForkCheckerPlugin(),
            // 共享打包优化插件，识别通用模块
            new webpack.optimize.CommonsChunkPlugin({
                name: [
                    'polyfills',
                    'vendor'
                ].reverse()
            }),
            // Ng上下文注入插件
            new ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)@angular/,
                helpers.root('src'), {}
            ),
            // 复制插件，复制指定目录或文件到指定路径，主要用于复制静态资源文件
            new CopyWebpackPlugin([{
                from: 'src/assets',
                to: 'assets'
            }]),
            // Html打包插件
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                chunksSortMode: 'dependency',
                title: METADATA.title,
                metadata: METADATA,
                inject: 'body'
            }),
            // 热替换插件--使用Hash时，不能使用热替换插件
            //new webpack.HotModuleReplacementPlugin(),
        ],
        node: {
            global: true,
            crypto: 'empty',
            fs: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    };
}