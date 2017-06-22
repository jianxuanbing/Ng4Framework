import { SelectComponent } from './select.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'bg-select-item',
    templateUrl:'./select-item.component.html'
})
export class SelectItemComponent implements OnInit{
    @Input() option:any;
    @Input() selected:boolean;
    @Output() onClick:EventEmitter<any>=new EventEmitter();
    protected selector:SelectComponent;

    constructor(selector:SelectComponent){
        this.selector=selector;
    }

    ngOnInit() {
        this.selector.addGroup(this);
        this.setActive();
    }

    setActive(){
        if(this.selected){
            this.selector.setSelected();
        }
    }

    itemClick(){
        this.onClick.emit(this.option);
        this.selector.setSelected();
        this.selected=true;
    }
}