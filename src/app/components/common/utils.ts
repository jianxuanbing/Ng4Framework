/**
 * 常用工具类
 * @export
 * @class Utils
 */
export class Utils{
    /**
     * 是否对象
     * @static
     * @param {*} value 值
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isObject(value:any):boolean{
        return value!==null&&typeof value==='object';
    }

    /**
     * 是否数组
     * @static
     * @param {*} value 值
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isArray(value:any):boolean{
        return Array.isArray(value);
    }

    /**
     * 是否未定义
     * @static
     * @param {*} value 值
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isUndefined(value:any):boolean{
        return typeof value==='undefined';
    }

    /**
     * 是否字符串
     * @static
     * @param {*} value 
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isString(value:any):boolean{
        return typeof value==='string';
    }

    /**
     * 是否数字
     * @static
     * @param {*} value 
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isNumber(value:any):boolean{
        return typeof value==='number';
    }

    /**
     * 是否布尔类型
     * @static
     * @param {*} value 值
     * @returns {boolean} 
     * 
     * @memberof Utils
     */
    public static isBoolean(value:any):boolean{
        return typeof value==='boolean';
    }
    
}