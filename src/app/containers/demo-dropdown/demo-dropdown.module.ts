import { DemoDropdownComponent } from './demo-dropdown.component';
import { GridModule } from './../../components/grid/grid.module';
import { ShareModule } from './../../components/common/share';
import { DropdownModule } from './../../components/dropdown/dropdown.module';
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
        DropdownModule,
        ShareModule,
        GridModule
    ],
    declarations:[DemoDropdownComponent]
})
export class DemoDropdownModule{}