// 引入库
const helpers = require('./helpers');
const path = require('path');
const webpack = require('webpack');

// webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
//const HtmlElementsPlugin = require('./html-elements-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 多个提取实例
const commonCss = new ExtractTextPlugin('stylesheets/common.[hash].css');
const themeCss = new ExtractTextPlugin('stylesheets/theme.[hash].css');

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
         * 是否启用缓存,缓存生成模块和多个增量构建块来提高性能
         */
        cache: false,
        /**
         * 入口文件位置
         */
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor': './src/vendor.ts',
            'main': './src/main.ts'
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
                'app': path.resolve(__dirname, '../src/app'),
                'data': path.resolve(__dirname, '../src/data'),
                'assets': path.resolve(__dirname, '../src/assets'),
            }
        },
        /**
         * 配置模块解析器
         */
        module: {
            exprContextCritical: false,
            rules: [{
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader?(tsconfig:"tsconfig.json")',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    test: /\.styl$/,
                    loader: 'css-loader!stylus-loader'
                },
                {
                    test: /\.css$/,
                    exclude: [helpers.root('src', 'app')],
                    loader: commonCss.extract({
                        fallbackLoader: 'style-loader',
                        loader: 'css-loader?sourceMap'
                    })
                },
                {
                    test: /\.scss$/,
                    include: helpers.root('src/assets'),
                    loaders: ['to-string-loader'].concat(themeCss.extract({
                        fallback: 'style-loader',
                        loader: 'css-loader?sourceMap!sass-loader?sourceMap'
                    }))
                },
                {
                    test: /\.scss$/,
                    include: helpers.root('src/app'),
                    loaders: [
                        'to-string-loader',
                        'css-loader?sourceMap',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },
                {
                    test: /\.(svg|woff|woff2|ttf|eot)$/,
                    loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
                },
                {
                    test: /\.(png|jpe?g|gif|ico)$/,
                    loader: 'url-loader?limit=8192&name=assets/images/[name].[hash].[ext]'
                }
            ],
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
                helpers.root('./src'), {}
            ),
            // 复制插件，复制指定目录或文件到指定路径，主要用于复制静态资源文件
            new CopyWebpackPlugin([{
                from: 'src/assets/images',
                to: 'assets/images'
            }, {
                from: 'src/plugins',
                to: 'plugins'
            }]),
            // Html打包插件，用于简化HTML文件(index.html)的创建，提供访问bundle的服务
            new HtmlWebpackPlugin({
                template: 'src/index.html', //模板
                chunksSortMode: 'dependency',
                title: METADATA.title,
                metadata: METADATA,
                inject: 'body' //将script标签插入到body标签中
            }),
            commonCss,
            themeCss,
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