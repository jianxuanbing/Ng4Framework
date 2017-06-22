import { config } from './../../common/config';
import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-checkbox',
    templateUrl:'./demo-checkbox.component.html',
    styleUrls:['./demo-checkbox.component.scss'],
    animations:[fadeInUp]
})
export class DemoCheckboxComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    theme:any[]=[];
    constructor(){}

    ngOnInit() {
        this.theme=config.theme;
    }
}