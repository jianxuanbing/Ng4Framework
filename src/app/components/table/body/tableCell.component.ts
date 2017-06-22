import { TableRowComponent } from './tableRow.component';
import { Component, OnInit, AfterViewInit, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';
@Component({
    selector:'bg-table-cell',
    template:'<ng-content></ng-content>'
})
export class TableCellComponent implements OnInit,AfterViewInit{
    protected row:TableRowComponent;
    @Input() colspan:number;
    @Input() rowspan:number;
    @ContentChild(TemplateRef) template:TemplateRef<any>;
    public cellTemplate:TemplateRef<any>;
    value:string;

    constructor(row:TableRowComponent,private er:ElementRef){
        this.row=row;
    }
    ngOnInit() {
        this.row.addCell(this);
    }

    ngAfterViewInit() {
        this.cellTemplate=this.template;
        this.value=this.er.nativeElement.innerHTML;        
    }
}