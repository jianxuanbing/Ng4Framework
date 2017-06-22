import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-form',
    templateUrl:'./demo-form.component.html',
    styleUrls:['./demo-form.component.scss'],
    animations:[fadeInUp]
})
export class DemoFormComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}