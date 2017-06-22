import { Utils } from './../../utils/utils';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-json-view',
    templateUrl:'./jsonView.component.html',
    styleUrls:['./jsonView.component.scss']
})
export class JsonViewComponent implements OnInit{
    @Input() key:string;
    @Input() level:number=0;
    /**
     * 初始化展开
     * @type {number}
     * @memberof JsonViewComponent
     */
    @Input() levelOpen:number;
    private _data:object;
    /**
     * 设置数据
     * @memberof JsonViewComponent
     */
    @Input() set data(data:object){        
        this._data=data;
        this.isInit&&this.init();
    }
    /**
     * 获取数据     
     * @readonly
     * @type {object}
     * @memberof JsonViewComponent
     */
    get data():object{return this._data;}

    isOpen:boolean=false;
    childrenKeys:string[];
    hasChildren:boolean=false;
    dataType:string;
    value:any;
    valueType:string;
    isObject:boolean=false;
    isArray:boolean=false;
    isInit:boolean=false;

    constructor(){}

    ngOnInit() {
        this.init();
        this.isInit=true;
    }

    init(){
        this.levelOpenHandle();
        this.childrenKeysHandle();
        this.dataHandle();
    }

    levelOpenHandle(){
        if(!Utils.isUndefined(this.levelOpen)){
            (this.level<=this.levelOpen)&&(this.isOpen=true);
        }
    }

    childrenKeysHandle(){
        if(Utils.isObject(this.data)){
            this.childrenKeys=Object.keys(this.data);
            this.childrenKeys&&this.childrenKeys.length&&(this.hasChildren=true);
        }
    }

    dataHandle(){
        if(Utils.isObject(this.data)){
            this.isObject=true;
            this.dataType='Object';
            if(Utils.isArray(this.data)){
                this.isArray=true;
                this.dataType='Array';
            }
        }else{
            this.value=this.data;
            if(Utils.isString(this.data)){
                this.valueType='string';
            }else if(Utils.isNumber(this.data)){
                this.valueType='number';                
            }else if(Utils.isBoolean(this.data)){
                this.valueType='boolean';
            }else if(null===this.data){
                this.valueType='null';
                this.value='null';
            }
        }
    }

    toggle(){
        if(!(this.childrenKeys&&this.childrenKeys.length)){
            return;
        }
        this.isOpen=!this.isOpen;
    }
}