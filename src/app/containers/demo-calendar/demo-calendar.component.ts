import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-calendar',
    templateUrl:'./demo-calendar.component.html',
    styleUrls:['./demo-calendar.component.scss'],
    animations:[fadeInUp]
})
export class DemoCalendarComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}