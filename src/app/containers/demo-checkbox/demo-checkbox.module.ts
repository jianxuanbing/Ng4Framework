import { DemoCheckboxComponent } from './demo-checkbox.component';
import { ButtonModule } from './../../components/button/button.module';
import { GridModule } from './../../components/grid/grid.module';
import { CheckboxModule } from './../../components/checkbox/checkbox.module';
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
        CheckboxModule,
        GridModule,
        ButtonModule
    ],
    declarations:[DemoCheckboxComponent]
})
export class DemoCheckboxModule{}