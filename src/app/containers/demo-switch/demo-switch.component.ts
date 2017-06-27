import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
@Component({
    selector:'bg-demo-switch',
    templateUrl:'./demo-switch.component.html',
    styleUrls:['./demo-switch.component.scss'],
    animations:[fadeInUp]
})
export class DemoSwitchComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }

    onChange(event:any){
        alert('是否选择：'+event.target.checked);
    }
}