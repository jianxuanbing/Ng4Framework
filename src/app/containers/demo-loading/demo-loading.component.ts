import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-loading',
    templateUrl:'./demo-loading.component.html',
    styleUrls:['./demo-loading.component.scss'],
    animations:[fadeInUp]
})
export class DemoLoadingComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}