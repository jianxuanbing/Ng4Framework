const helpers=require('./helpers');
const webpack=require('webpack');

/**
 * webpack plugins
 */
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:{
        'polyfills':'./src/ployfills.ts',//运行Angular时所需的一些标准js
        'vendor':'./src/vendor.ts',//Angular、Lodash、bootstrap.css
        'app':'./src/app.ts'//应用代码
    },
    resolve:{//解析模块路径时的配置
        extensions:['','.ts','.js','.json'],//指定模块的后缀，在引入模块时就会自动补全
        root:helpers.root('src'),//根目录
        modulesDirectories:['node_modules']//移除其他默认值
    },
    module:{
        rules:[//配置类文件加载器
        {
            test:/\.ts$/,
            loaders:['awesome-typescript-loader','angular2-template-loader']
        }
        ]
    }
}