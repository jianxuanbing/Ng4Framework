import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-accordion',
    templateUrl:'./demo-accordion.component.html',
    styleUrls:['./demo-accordion.component.scss'],
    animations:[fadeInUp]
})
export class DemoAccordionComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpstate:any;
    @HostBinding('style.display') display='block';
    constructor(){}

    ngOnInit() {        
    }
}