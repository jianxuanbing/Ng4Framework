import { Component, Input } from '@angular/core';
import { AccordionComponent } from './accordion.component';
@Component({
    selector:'bing-accordion-group',
    template:'<ng-content></ng-content>'
})
export class AccordionGroupComponent{
    @Input() closeOthers:boolean;
    protected groups:AccordionComponent[]=[];
    constructor(){}

    closeOther(activeItem:AccordionComponent){
        if(!this.closeOthers){
            return;
        }
        this.groups.forEach((item:AccordionComponent)=>{
            if(item!==activeItem){
                item.isExpand=false;
            }
        });
    }

    addGroup(item:AccordionComponent){
        this.groups.push(item);
    }
}