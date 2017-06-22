import { DemoBreadcrumbComponent } from './demo-breadcrumb.component';
import { GridModule } from './../../components/grid/grid.module';
import { BreadcrumbModule } from './../../components/breadcrumb/breadcrumb.module';
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
        BreadcrumbModule,
        GridModule
    ],
    declarations:[DemoBreadcrumbComponent]
})
export class DemoBreadcrumbModule{}