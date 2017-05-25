import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/** 
 * 全局状态
 * @export
 * @class GlobalState
 */
@Injectable()
export class GlobalState{
    private _data=new Subject<Object>();
    private _dataStream$=this._data.asObservable();
    private _subscriptions:Map<string,Array<Function>>=new Map<string,Array<Function>>();

    constructor(){
        this._dataStream$.subscribe((data)=>this._onEvent(data));
    }
    /**
     * 通知数据更改事件     
     * @param {string} event 事件名称
     * @param {*} value 值
     * 
     * @memberof GlobalState
     */
    notifyDataChanged(event:string,value:any){
        let current=this._data[event];
        if(current!==value){
            this._data[event]=value;
            this._data.next({
                event:event,
                data:this._data[event]
            });
        }
    }

    /**
     * 订阅事件     
     * @param {string} event 事件
     * @param {Function} callback 回调方法
     * 
     * @memberof GlobalState
     */
    subscribe(event:string,callback:Function){
        let subscribers=this._subscriptions.get(event)||[];
        subscribers.push(callback);
        this._subscriptions.set(event,subscribers);
    }
    /**
     * 触发事件，更改数据
     * @param {*} data 数据
     * 
     * @memberof GlobalState
     */
    _onEvent(data:any){
        let subscribers=this._subscriptions.get(data['event'])||[];
        subscribers.forEach((callback)=>{
            callback.call(null,data['data']);
        });
    }

}