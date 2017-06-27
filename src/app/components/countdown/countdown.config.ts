/**
 * 倒计时配置
 * @export
 * @interface CountDownConfig
 */
export interface CountDownConfig{
    /**
     * 自定义模板，如果为空以组件 innerHTML 为准，再不然使用默认值
     * @type {string}@memberof CountDownConfig
     */
    template?:string;

    /**
     * 尺寸
     * @type {('lite'|'medium'|'large')}
     * @memberof CountDownConfig
     */
    size?:'lite'|'medium'|'large';

    /**
     * 剩余时间，单位：秒
     * @type {number}
     * @memberof CountDownConfig
     */
    leftTime?:number;

    /**
     * 结束时间，单位：UNIX时间戳 ms
     * 指的是根据本地时间至结束时间进行倒计时
     * @type {number}
     * @memberof CountDownConfig
     */
    stopTime?:number;

    /**
     * 模板解析正则表达式
     * 有时候由于模板结构比较特殊，无法根据默认的表达式进行解析，那就需要修改它
     * @type {RegExp}
     * @memberof CountDownConfig
     */
    varRegular?:RegExp;

    /**
     * 时间控制数组，特殊需求时可以修改，里面是三元组：指针名、进制、位数，可参考大于99小时demo
     * @type {any[]}
     * @default ['d',100,2,'h',24,2,'m',60,2,'s',60,2,'u',10,1]
     * @memberof CountDownConfig
     */
    clock?:any[];

    /**
     * 第xx秒时调用 notify 函数，值必须是正整数
     * @type {number[]}
     * @memberof CountDownConfig
     */
    notify?:number[];

    /**
     * 自定义类名
     * @type {string}@memberof CountDownConfig
     */
    className?:string;

    /**
     * 重绘
     * @type {Function}@memberof CountDownConfig
     */
    repaint?:Function;
}