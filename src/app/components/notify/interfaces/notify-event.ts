import { HolderOptions } from './holder-options';
import { Notify } from './notify';

/**
 * 通知事件
 * @export
 * @interface NotifyEvent
 */
export interface NotifyEvent{
    /**
     * 命令
     * @type {string}
     * @memberof NotifyEvent
     */
    command:string;

    /**
     * 通知ID
     * @type {string}
     * @memberof NotifyEvent
     */
    id?:string;

    /**
     * 通知
     * @type {Notify}
     * @memberof NotifyEvent
     */
    notify?:Notify;

    /**
     * 是否已添加
     * @type {boolean}
     * @memberof NotifyEvent
     */
    add?:boolean;

    /**
     * 固定位置配置
     * @type {HolderOptions}
     * @memberof NotifyEvent
     */
    holderOptions?:HolderOptions;
}