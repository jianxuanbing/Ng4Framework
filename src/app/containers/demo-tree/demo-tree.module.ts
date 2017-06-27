import { DemoTreeComponent } from './demo-tree.component';
import { TreeModule } from './../../components/tree/tree.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupModule } from '../../components/tab/tab-group.module';
import { GridModule } from '../../components/grid/grid.module';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        GridModule,
        TreeModule
    ],
    declarations:[DemoTreeComponent]
})
export class DemoTreeModule{}