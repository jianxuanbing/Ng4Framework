import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-image-group',
    templateUrl:'./image-group.component.html',
    styleUrls:['./image.component.scss']
})
export class ImageGroupComponent implements OnInit{
    @Input() images:any[]=[];
    constructor(){}

    ngOnInit() {        
    }
}