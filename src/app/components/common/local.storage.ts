/**
 * 本地存储-LocalStorage
 */
export class LocalStorage{
    public localStorage:any;

    constructor(){
        if(!localStorage){
            throw new Error('Current browser does not support Local Storage.(当前的浏览器不支持本地存储)');
        }
        this.localStorage=localStorage;
    }
    /**
     * 设置本地存储-string
     * @param key 键
     * @param value 值 
     */
    public set(key:string,value:string):void{
        this.localStorage[key]=value;
    }
    /**
     * 获取本地存储-string
     * @param key 键
     */
    public get(key:string):string{
        return this.localStorage[key]||false;
    }

    /**
     * 设置本地存储-object
     * @param key 键
     * @param value 值 
     */
    public setObject(key:string,value:any):void{
        this.localStorage[key]=JSON.stringify(value);
    }

    /**
     * 获取本地存储-object
     * @param key 键
     */
    public getObject(key:string):any{
        return JSON.parse(this.localStorage[key]||'{}');
    }

    /**
     * 移除本地存储
     * @param key 键
     */
    public remove(key:string):any{
        this.localStorage.removeItem(key);
    }
}