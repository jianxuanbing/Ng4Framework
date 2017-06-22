import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-badge',
    templateUrl:'./demo-badge.component.html',
    styleUrls:['./demo-badge.component.scss'],
    animations:[fadeInUp]
})
export class DemoBadgeComponent implements OnInit{
    @HostBinding("@fadeInUpState") fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}