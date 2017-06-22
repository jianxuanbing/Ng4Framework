import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-grid',
    templateUrl:'./demo-grid.component.html',
    styleUrls:['./demo-grid.component.scss'],
    animations:[fadeInUp]
})
export class DemoGridComponent implements OnInit{

    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';
    constructor(){}

    ngOnInit() {        
    }
}