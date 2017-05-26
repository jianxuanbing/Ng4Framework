import { Component, OnInit } from '@angular/core';
import { TableCellComponent } from './tableCell.component';
@Component({
    selector:'bing-table-row',
    template:'<ng-content></ng-content>'
})
export class TableRowComponent implements OnInit{
    cells:TableCellComponent[]=[];
    selected:boolean;

    constructor(){}

    ngOnInit() {        
    }

    addCell(value:TableCellComponent){
        this.cells.push(value);
    }
}