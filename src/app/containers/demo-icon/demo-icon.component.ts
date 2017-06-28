import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-icon',
    templateUrl:'./demo-icon.component.html',
    styleUrls:['./demo-icon.component.scss'],
    animations:[fadeInUp]    
})
export class DemoIconComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}