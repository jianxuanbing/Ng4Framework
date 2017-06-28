import { DemoIconComponent } from './demo-icon.component';
import { GridModule } from './../../components/grid/grid.module';
import { IconModule } from './../../components/icon/icon.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        IconModule,
        GridModule,
    ],
    declarations:[DemoIconComponent]
})
export class DemoIconModule{}