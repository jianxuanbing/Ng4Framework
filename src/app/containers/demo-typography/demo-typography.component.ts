import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-typography',
    templateUrl:'./demo-typography.component.html',
    styleUrls:['./demo-typography.component.scss'],
    animations:[fadeInUp]
})
export class DemoTypographyComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }
}