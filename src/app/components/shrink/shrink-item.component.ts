import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-shrink-item',
    templateUrl:'./shrink-item.component.html'
})
export class ShrinkItemComponent implements OnInit{
    @Input() icon:string;
    @Input() itemStyle:any;

    constructor(){}

    ngOnInit() {        
    }
}