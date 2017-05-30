import { Component, OnInit, AfterViewInit, OnDestroy, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { ChipGroupComponent } from './group/chipGroup.component';
@Component({
    selector:'bing-chip',
    templateUrl:'./chip.component.html'
})
export class ChipComponent implements OnInit,AfterViewInit,OnDestroy{
    protected group:ChipGroupComponent;
    @Input() value:any;
    @Input() delete:boolean;
    @ViewChild('container') container:ElementRef;
    
    constructor(private renderer2:Renderer2,private er:ElementRef,group:ChipGroupComponent)    {
        this.group=group;
    }

    ngOnInit() {
        if(this.group&&this.group.chips.indexOf(this.value)>0){
            this.group.addGroup(this);
        }
    }

    ngAfterViewInit() {
        if(this.delete){
            this.renderer2.addClass(this.container.nativeElement,'bing-chip-delete');
        }else{
            this.renderer2.removeClass(this.container.nativeElement,'bing-chip-delete');
        }
    }

    onDelete(){
        const chips=this.group.groups;
        const index=chips.indexOf(this);
        if(index>=0){
            chips.splice(index,1);
        }
        console.log(index);
    }

    ngOnDestroy() {
        if(this.group){
            this.group.removeGroup(this);
        }
    }
}