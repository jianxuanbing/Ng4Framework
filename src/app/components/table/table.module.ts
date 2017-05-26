import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TCheckboxComponent} from "./checkbox/tableCheckbox.component";
import {TableHeaderComponent} from "./header/tableHeader.component";
import {TableRowComponent} from "./body/tableRow.component";
import {TableHeadComponent} from "./head/tableHead.component";
import {TableCellComponent} from "./body/tableCell.component";
import {TableBodyComponent} from "./body/tableBody.component";
import {TableComponent} from "./table.component";
import {TemplateComponent} from "./template.component";
@NgModule({
    imports:[CommonModule],
    declarations:[TCheckboxComponent,TableHeaderComponent,TableRowComponent,TableHeadComponent,TableCellComponent,TableBodyComponent,TableComponent,TemplateComponent],
    exports:[TCheckboxComponent,TableHeaderComponent,TableRowComponent,TableHeadComponent,TableCellComponent,TableBodyComponent,TableComponent,TemplateComponent]
})
export class TableModule{
    
}