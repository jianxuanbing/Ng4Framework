import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-tree',
    templateUrl:'./tree.component.html',
    styleUrls:['./tree.component.scss']
})
export class TreeComponent implements OnInit{
    @Input() menus:any;
    
    constructor(){}

    ngOnInit() {        
    }
    
}