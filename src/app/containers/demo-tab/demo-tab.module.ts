import { GridModule } from './../../components/grid/grid.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { CommonModule } from '@angular/common';
import { DemoTabComponent } from './demo-tab.component';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        GridModule,
    ],
    declarations:[DemoTabComponent]
})
export class DemoTabModule{}