/**
 * 通知配置
 * @export
 * @interface NotifyOptions
 */
export interface NotifyOptions{
    /**
     * 通知类型
     * @type {('success'|'error'|'info'|'alert'|'bare'|'html')}
     * @memberof NotifyOptions
     */
    type?:'success'|'error'|'info'|'alert'|'bare'|'html';
    
    /**
     * 通知 Icon图标
     * @type {string}
     * @memberof NotifyOptions
     */
    icon?:string;

    /**
     * 标题
     * @type {string}
     * @memberof NotifyOptions
     */
    title?:string;

    /**
     * 消息内容
     * @type {string}
     * @memberof NotifyOptions
     */
    content?:string;

    /**
     * 自定义模板代码，支持\{type\}、\{icon\}、\{title\}、\{content\} 字符串格式化。
     * @type {string}
     * @memberof NotifyOptions
     */
    html?:string;
    
    /**
     * 进入动画（可以使用animate.css），默认系统以淡入
     * @type {string}
     * @memberof NotifyOptions
     */
    animateIn?:string;

    /**
     * 离开动画（可以使用animate.css），默认系统以淡出
     * @type {string}
     * @memberof NotifyOptions
     */
    animateOut?:string;

    /**
     * 进度条
     * @type {boolean}
     * @memberof NotifyOptions
     */
    progress?:boolean;

    /**
     * 显示时长（单位：毫秒）
     * @type {number}
     * @memberof NotifyOptions
     */
    timeout?:number;

    /**
     * 悬停时暂停
     * @type {boolean}
     * @memberof NotifyOptions
     */
    pauseOnHover?:boolean;

    /**
     * 点击时关闭
     * @type {boolean}
     * @memberof NotifyOptions
     */
    clickToClose?:boolean;

    /**
     * 主题类型
     * @type {('default'|'bootstrap')}
     * @memberof NotifyOptions
     */
    theme?:'default'|'bootstrap';

    /**
     * 文本方向从右向左
     * @type {boolean}
     * @memberof NotifyOptions
     */
    rtl?:boolean;

    /**
     * 自定义类名
     * @type {string}
     * @memberof NotifyOptions
     */
    className?:string;

    /**
     * 创建通知时的回调
     * @type {Function}
     * @memberof NotifyOptions
     */
    onCreate?:Function;

    /**
     * 销毁通知时的回调
     * @type {Function}
     * @memberof NotifyOptions
     */
    onDestroy?:Function;
}