import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bing-breadcrumb',
    templateUrl:'./breadcrumb.component.html',
    styleUrls:['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit{
    @Input() menus:any;
    @Input() separator='/';
    @Input() icon:string;

    constructor(){}

    ngOnInit() {
    }
}