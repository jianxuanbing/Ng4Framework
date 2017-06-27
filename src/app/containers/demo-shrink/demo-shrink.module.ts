import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShrinkModule } from '../../components/shrink/shrink.module';
import { GridModule } from '../../components/grid/grid.module';
import { DemoShrinkComponent } from './demo-shrink.component';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        ShrinkModule,
        GridModule,
    ],
    declarations:[DemoShrinkComponent]    
})
export class DemoShrinkModule{}