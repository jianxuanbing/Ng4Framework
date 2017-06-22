import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-buttons',
    templateUrl:'./demo-buttons.component.html',
    styleUrls:['./demo-buttons.component.scss'],
    animations:[fadeInUp]
})
export class DemoButtonsComponent implements OnInit{
    msg:any[]=[];
    num=0;
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.dispaly') display='block';

    pageTitle:string;

    constructor(){
        this.pageTitle='Components-Button-BingNG';
    }

    ngOnInit() {        
    }

    onClick(){
        this.msg.push('描述提示框'+(++this.num));
    }
}