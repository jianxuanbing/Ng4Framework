import { DemoLoadingComponent } from './demo-loading.component';
import { GridModule } from './../../components/grid/grid.module';
import { LoadingModule } from './../../components/loading/loading.module';
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
        LoadingModule,
        GridModule
    ],
    declarations:[DemoLoadingComponent]    
})
export class DemoLoadingModule{}