/**
 * 开发环境-Api接口
 */
const devApi='/api';
/**
 * 生产环境-Api接口
 */
const prodApi='http://www.baidu.com';
/**
 * 静态文件-接口
 */
const staticApi='http://www.baidu.com';

/**
 * 输出环境-Api接口
 */
let exportApi;
if('production'===ENV){
    exportApi=prodApi;
}else{
    exportApi=devApi;
}
/**
 * API 根路径
 */
export const API_ROOT=exportApi;
/**
 * 静态资源 根路径
 */
export const STATIC_URL=staticApi;