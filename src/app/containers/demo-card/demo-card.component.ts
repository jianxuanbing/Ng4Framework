import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
const myJpg = require("./../../../assets/images/001.jpg");
@Component({
    selector:'bg-demo-card',
    templateUrl:'./demo-card.component.html',
    styleUrls:['./demo-card.component.scss'],
    animations:[fadeInUp]
})
export class DemoCardComponent implements OnInit{
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.display') display='block';
    img:string;

    constructor(){}
    ngOnInit() {
        this.img=myJpg;
    }
}