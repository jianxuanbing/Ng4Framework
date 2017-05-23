var path=require('path');
var _root=path.resolve(__dirname,'..');

/**
 * 获取根目录
 */
function root(args) {
    args=Array.prototype.slice.call(arguments,0);
    return path.join.apply(path,[_root].concat(args));
}

/**
 * 是否有进度状态
 */
function hasProcessFlag(flag){
    return process.argv.join('').indexOf(flag)>-1;
}

/**
 * 是否Webpack开发服务器
 */
function isWebpackDevServer(){
    return process.argv[1]&&!!(/webpack-dev-server/.exec(process.argv[1]));
}

exports.root=root;
exports.hasProcessFlag=hasProcessFlag;
exports.isWebpackDevServer=isWebpackDevServer;