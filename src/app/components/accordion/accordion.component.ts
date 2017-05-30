import { AccordionGroupComponent } from './accordionGroup.component';
import { Component, OnInit, Input } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
    selector:'bing-accordion',
    templateUrl:'./accordion.component.html'  ,
    styleUrls:['./accordion.component.scss'],
    animations:[trigger('accordionState',[
        state('active',style({
            height:'*'
        })),
        state('inactive',style({
            height:0
        })),
        transition('inactive <=> active',animate('300ms ease'))
    ])]
})
export class AccordionComponent implements OnInit{
    @Input() header:string;
    @Input() disabled=false;
    @Input() toggleable=true;
    @Input()
    get iconName():string{
        return this._icon;
    }

    set iconName(value:string){
        this._icon=value;
    }

    @Input()
    get isExpand(){
        return this._isExpanded;
    }

    set isExpand(value:boolean){
        this._isExpanded=value;
        if(this._isExpanded){
            this.accordionGroup.closeOther(this);
        }
        this.toggleClass();
    }

    protected _isExpanded=false;
    protected _icon:string;
    isActive='inactive';
    itemClass={};
    isAnimating:boolean;
    protected accordionGroup:AccordionGroupComponent;

    constructor(accordionGroup:AccordionGroupComponent){
        this.accordionGroup=accordionGroup;
    }

    ngOnInit() {
        this.accordionGroup.addGroup(this);
        this.toggleClass();
    }

    toggleClass(){
        if(!this.isAnimating){
            this.isActive=this.isExpand?'active':'inactive';
            this.itemClass={
                'accordion-item-expand':this.isExpand;
            };
        }
    }

    toggle(){
        if(!this.disabled){
            this.isExpand=!this.isExpand;
        }
    }

    transitionStart(){
        this.isAnimating=true;
    }

    transitionDone(){
        this.isAnimating=false;
    }
}