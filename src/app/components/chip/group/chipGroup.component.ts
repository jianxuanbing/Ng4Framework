import { ChipComponent } from './../chip.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChipComponent } from '../chip.component';
@Component({
    selector:'bing-chip-group',
    templateUrl:'./chipGroup.component.html',
    styleUrls:['../chip.component.scss']
})
export class ChipGroupComponent implements OnInit{
    @Input() chips:any;
    @Output() chipsChange:EventEmitter<any>=new EventEmitter();
    @Input() placeholder:boolean;
    chipClass={};
    focus:boolean;
    groups:ChipComponent[]=[];
    
    constructor(){}

    ngOnInit() {
        this.setChipClass();
    }

    setChipClass(){
        this.chipClass={
            'bing-chip-input':this.placeholder,
            'bing-chip-focus':this.focus
        };
    }

    addGroup(value:ChipComponent){
        this.groups.push(value);
    }

    removeGroup(value:ChipComponent){
        let i=this.groups.length;
        while(i--){
            if(this.groups[i]===value){
                this.groups.splice(i,1);
            }
        }
    }

    onFocus(){
        this.focus=!this.focus;
        this.setChipClass();
    }

    onEnter(event:any){
        this.chips.push({
            value:event.target.value,
            delete:true
        });
    }
}