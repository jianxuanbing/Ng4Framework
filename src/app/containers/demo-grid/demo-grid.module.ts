import { CodeModule } from './../../components/code/code.module';
import { NgModule } from '@angular/core';
import { TableModule } from '../../components/table/table.module';
import { DemoGridComponent } from './demo-grid.component';
@NgModule({
    imports:[TableModule,CodeModule],
    declarations:[DemoGridComponent]
})
export class DemoGridModule{}