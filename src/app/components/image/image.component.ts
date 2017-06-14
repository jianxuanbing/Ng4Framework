import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bing-image'  ,
    templateUrl:'./image.component.html'
})
export class ImageComponent implements OnInit{
    @Input() src:string;
    @Input() alt:string;
    @Input() highlight:boolean;

    constructor(){}

    ngOnInit() {        
    }
}