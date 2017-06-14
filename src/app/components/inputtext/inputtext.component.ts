import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bing-inputtext',
    templateUrl:'./inputtext.component.html',
    styleUrls:['./inputtext.component.scss']
})
export class InputtextComponent implements OnInit{
    @Input() color:string;
    @Input() icon:string;
    inputClass:any;

    constructor(){}

    ngOnInit() {
        this.inputClass={
            'input-field-icon':!!this.icon
        }
    }
}