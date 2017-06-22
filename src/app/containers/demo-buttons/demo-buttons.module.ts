import { DemoButtonsComponent } from './demo-buttons.component';
import { GridModule } from './../../components/grid/grid.module';
import { ButtonModule } from './../../components/button/button.module';
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
        ButtonModule,
        GridModule
    ],
    declarations:[DemoButtonsComponent]
})
export class DemoButtonsModule{}