import { Component, OnInit,HostBinding } from '@angular/core';
import { fadeInUp } from './../../utils/animations';
@Component({
    selector:'bg-main',
    templateUrl:'./main.component.html',
    styleUrls:['./main.component.scss'],
    animations:[fadeInUp]
})
export class MainComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';

    constructor(){}

    ngOnInit() {        
    }    
}