import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
@Component({
    selector:'bing-table',
    templateUrl:'./table.component.html',
    styleUrls:['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit{
    @Input() pagination:boolean;
    @Input() selection:boolean;
    @Input() striped:boolean;
    @Input() border:boolean;
    @Input() hover:boolean;
    @ViewChild('container') container:ElementRef;
    

}