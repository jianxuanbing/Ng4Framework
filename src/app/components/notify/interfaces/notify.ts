import { NotifyOptions } from './notify-options';
import { EventEmitter } from '@angular/core';

/**
 * 通知
 * @export
 * @interface Notify
 * @extends {NotifyOptions}
 */
export interface Notify extends NotifyOptions{
    /**
     * 通知全局ID
     * @type {string}
     * @memberof Notify
     */
    id?:string;

    /**
     * 创建时间
     * @type {Date}
     * @memberof Notify
     */
    createdOn?:Date;

    /**
     * 销毁时间
     * @type {Date}
     * @memberof Notify
     */
    destroyedOn?:Date;

    /**
     * 点击事件
     * @type {EventEmitter<{}>}
     * @memberof Notify
     */
    click?:EventEmitter<{}>;

    /**
     * 索引
     */
    [index:string]:any;
}