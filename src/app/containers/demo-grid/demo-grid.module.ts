import { TabGroupModule } from './../../components/tab/tab-group.module';
import { GridModule } from './../../components/grid/grid.module';
import { CommonModule } from '@angular/common';
import { CodeModule } from './../../components/code/code.module';
import { NgModule } from '@angular/core';
import { TableModule } from '../../components/table/table.module';
import { DemoGridComponent } from './demo-grid.component';
@NgModule({
    imports:[
        CommonModule,
        TableModule,
        CodeModule,
        GridModule,
        TabGroupModule,
    ],
    declarations:[DemoGridComponent]
})
export class DemoGridModule{}