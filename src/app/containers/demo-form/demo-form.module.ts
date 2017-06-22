import { DemoFormComponent } from './demo-form.component';
import { GridModule } from './../../components/grid/grid.module';
import { InputtextModule } from './../../components/inputtext/inputtext.module';
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
        InputtextModule,
        GridModule
    ],
    declarations:[DemoFormComponent]
})
export class DemoFormModule{}