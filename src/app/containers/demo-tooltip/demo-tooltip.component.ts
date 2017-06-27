import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-tooltip',
    templateUrl:'./demo-tooltip.component.html',
    styleUrls:['./demo-tooltip.component.scss'],
    animations:[fadeInUp]
})
export class DemoTooltipComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }    
}