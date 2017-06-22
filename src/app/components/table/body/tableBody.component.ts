import { TableComponent } from './../table.component';
import { TableRowComponent } from './tableRow.component';
import { Component, OnInit, AfterViewInit, ContentChildren, QueryList } from '@angular/core';
@Component({
    selector:'bg-table-body',
    template:'<ng-content></ng-content>'
})
export class TableBodyComponent implements OnInit,AfterViewInit{
    @ContentChildren(TableRowComponent) _rows:QueryList<TableRowComponent>;
    rows:TableRowComponent[]=[];
    protected table:TableComponent;

    constructor(table:TableComponent){
        this.table=table;
    }

    ngOnInit() {
        this.table.addBody(this);
    }

    ngAfterViewInit() {
        this.rows=this._rows.toArray();
    }
}