import { DemoSpinnerComponent } from './demo-spinner.component';
import { SpinnerModule } from './../../components/spinner/spinner.module';
import { GridModule } from './../../components/grid/grid.module';
import { CodeModule } from './../../components/code/code.module';
import { TableModule } from './../../components/table/table.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        TableModule,
        CodeModule,
        GridModule,
        SpinnerModule,        
    ],
    declarations:[DemoSpinnerComponent]
})
export class DemoSpinnerModule{}