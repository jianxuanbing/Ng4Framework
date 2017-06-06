
/**
 * 固定位置配置
 * @export
 * @interface HolderOptions
 */
export interface HolderOptions{
    /**
     * 位置
     * @type {('right'|'left'|'top'|'bottom')}
     * @memberof HolderOptions
     * @default ['right','bottom']
     */
    position?:'right'|'left'|'top'|'bottom';

    /**
     * 偏移量，[0] right|left，[1] top|bottom
     * @type {[number,number]}
     * @memberof HolderOptions
     * @default [20,20]
     */
    offset?:[number,number];

    /**
     * z-index 值
     * @type {number}
     * @memberof HolderOptions
     * @default 1031
     */
    zIndex?:number;

    /**
     * 最多显示数量，当超过时强制移除最旧的通知
     * @type {number}
     * @memberof HolderOptions
     * @default 8
     */
    maxStack?:number;

    /**
     * 最小宽度
     * @type {number}
     * @memberof HolderOptions
     * @default 300
     */
    minWidth?:number;

    /**
     * 最大宽度
     * @type {number}
     * @memberof HolderOptions
     * @default 300
     */
    maxWidth?:number;

    /**
     * 是否从底部开始显示
     * @type {boolean}
     * @memberof HolderOptions
     * @default true
     */
    lastOnBottom?:boolean;

    /**
     * 自定义类名
     * @type {string}
     * @memberof HolderOptions
     */
    className?:string;

    /**
     * 创建通知的回调
     * @type {Function}
     * @memberof HolderOptions
     */
    onCreate?:Function;

    /**
     * 销毁通知的回调
     * 
     * @type {Function}
     * @memberof HolderOptions
     */
    OnDestroy?:Function;
}