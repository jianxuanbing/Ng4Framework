import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnChanges, Input } from '@angular/core';
@Component({
    selector:'bg-tree-item',
    templateUrl:'./tree-item.component.html',
    animations:[
        trigger('treeState',[
            state('active',style({
                height:'*'
            })),
            state('inactive',style({
                height:0
            })),
            transition('active <=> inactive',animate('.25s ease'))
        ])
    ]
})
export class TreeItemComponent implements OnChanges{
    @Input() title:string;
    @Input() folder:any;
    @Input() file:any;
    @Input() expanded:boolean;
    isActive:string;
    isOpen:boolean;

    constructor(){
        this.isActive='inactive';
    }

    ngOnChanges() {        
        if(this.expanded){
            this.isActive='active';
            this.isOpen=true;
        }
    }

    toggle(event:any){
        event.stopPropagation();
        const cl=event.target.parentNode.classList;
        cl.toggle('open');
        this.isOpen=!this.isOpen;
        this.isActive=this.isOpen?'active':'inactive';
    }
}