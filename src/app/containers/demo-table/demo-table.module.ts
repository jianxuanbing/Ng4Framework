import { GridModule } from './../../components/grid/grid.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeModule } from '../../components/code/code.module';
import { TableModule } from '../../components/table/table.module';
import { DemoTableComponent } from './demo-table.component';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        GridModule
    ],
    declarations:[DemoTableComponent]
})
export class DemoTableModule{}