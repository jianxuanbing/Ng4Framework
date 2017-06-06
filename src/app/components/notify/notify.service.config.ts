import { NotifyOptions } from './interfaces/notify-options';
import { HolderOptions } from './interfaces/holder-options';
export class NotifyServiceConfig{
    /**
     * 容器
     * @type {HTMLElement}
     * @memberof NotifyServiceConfig
     */
    container?:HTMLElement=null;

    /**
     * 固定位置配置
     * @type {HolderOptions}
     * @memberof NotifyServiceConfig
     */
    options?:HolderOptions;

    /**
     * 通知配置
     * @type {NotifyOptions}
     * @memberof NotifyServiceConfig
     */
    notify?:NotifyOptions;
}