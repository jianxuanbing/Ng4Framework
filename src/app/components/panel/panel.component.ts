import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-panel',
    templateUrl:'./panel.component.html',
    styleUrls:['./panel.component.scss']
})
export class PanelComponent implements OnInit{
    @Input() header:string;
    @Input() theme:string;
    panelClass:any;
    constructor(){}

    ngOnInit() {
        this.panelClass={
            'theme-black':(this.theme==='black'?true:false)
        };
    }
}