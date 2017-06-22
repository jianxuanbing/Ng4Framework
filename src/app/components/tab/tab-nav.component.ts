import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'bg-tab-nav',
    templateUrl:'./tab-nav.component.html',    
})
export class TabNavComponent{
    @Input() header:string;
    @Input() tabs:any;
    @Input() direction:string;
    @Output() onTabClick=new EventEmitter();

    constructor(){}

    tabClick(index:any){
        this.onTabClick.emit(index);
    }
}