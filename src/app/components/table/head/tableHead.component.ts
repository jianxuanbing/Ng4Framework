import { Component, OnInit, AfterViewInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { TableComponent } from '../table.component';
@Component({
    selector:'bg-table-head',
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

    constructor(table:TableComponent,private er:ElementRef){
        this.table=table;
    }

    ngOnInit() {
        this.table.addHead(this);
    }

    ngAfterViewInit() {
        this.title=this.er.nativeElement.innerHTML;
        this.headerTemplate=this.template;
    }
}