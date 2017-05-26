import { Component, OnInit, AfterViewInit, Input,ContentChild,TemplateRef } from '@angular/core';
@Component({
    selector:'bing-table-head',
    template:'<ng-content></ng-content>'
})
export class TableHeadComponent implements OnInit,AfterViewInit{
    @Input() sortable:boolean;
    @Input() rowspan:string;
    @Input() colspan:string;
    @ContentChild(TemplateRef) template:TemplateRef<any>;
    public headerTemplate:TemplateRef<any>;
    title:string;
    protected table:any;

    constructor(table:TableComponent)
}