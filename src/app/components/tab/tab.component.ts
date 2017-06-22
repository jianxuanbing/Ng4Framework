import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, style, transition, animate,state } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-tab',
    templateUrl:'./tab.component.html',
    animations:[
        trigger('tabState',[
            state('active',style({
                transform:'translateX(0)',
                opacity:1
            })),
            state('inactive',style({
                transform:'translate(100%)',
                opacity:0
            })),
            transition('active <=> inactive',animate('300ms ease'))
        ])
    ]
})
export class TabComponent implements OnInit{
    @Input() header:string;
    @Input()
    get selected():boolean{
        return this._selected;
    }
    set selected(value:boolean){
        this._selected=value;
        this.toggleClass();
    }
    tabClass:any;
    _selected:boolean;

    constructor(){}

    toggleClass(){
        this.tabClass={
            'bg-tab':true,
            'active':this._selected
        };
    }

    ngOnInit() {
        this.toggleClass();
    }
    
    setActive(value:boolean){
        this.selected=value;
    }
}