import { fadeIn } from './../common/animations';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
@Component({
    selector:'bing-mask',
    templateUrl:'./mask.component.html',
    styleUrls:['./mask.component.scss'],
    animations:[fadeIn]
})
export class MaskComponent implements OnInit{
    _visible:boolean;
    timeoutId:any;
    @Output() visibleChange:EventEmitter<boolean>=new EventEmitter();
    @Input() close:boolean;
    @Input() delay:number;
    @Input()
    get visible():boolean{
        return this._visible;
    }
    set visible(value:boolean){
        this._visible=value;
        this.visibleChange.emit(this._visible);
    }

    constructor(){}

    ngOnInit() {        
    }

    transitionEnd(){
        if(!!this.delay&&!this.timeoutId){
            this.timeoutId=setTimeout(()=>{// 注意: 必须使用箭头函数,不然函数里面的this指向的是window
                this.visible=false;
            },this.delay);
        }else if(this.timeoutId){
            this.timeoutId=null;
        }
    }
}