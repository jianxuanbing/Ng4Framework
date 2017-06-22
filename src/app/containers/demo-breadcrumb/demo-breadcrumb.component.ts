import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector:'bg-demo-breadcrumb',
    templateUrl:'./demo-breadcrumb.component.html',
    styleUrls:['./demo-breadcrumb.component.scss'],
    animations:[fadeInUp]
})
export class DemoBreadcrumbComponent implements OnInit{
    menus:any;
    @HostBinding('@fadeInUpState') fadeInUpState:any;
    @HostBinding('style.dispaly') display='block';

    constructor(){}

    ngOnInit() {
        this.menus=[
            {'name':'首页'},
            {'name':'面包屑'},
            {'name':'面包屑'},
        ]
    }    
}