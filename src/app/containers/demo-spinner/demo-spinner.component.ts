import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-spinner',
    templateUrl:'./demo-spinner.component.html',
    styleUrls:['./demo-spinner.component.scss'],
    animations:[fadeInUp]
})
export class DemoSpinnerComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}