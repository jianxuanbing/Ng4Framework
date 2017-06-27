import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-tab',
    templateUrl:'./demo-tab.component.html',
    styleUrls:['./demo-tab.component.scss'],
    animations:[fadeInUp]
})
export class DemoTabComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';
    constructor(){}

    ngOnInit() {        
    }
}