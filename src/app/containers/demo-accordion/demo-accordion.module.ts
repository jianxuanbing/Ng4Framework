import { GridModule } from './../../components/grid/grid.module';
import { AccordionModule } from './../../components/accordion/accordion.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { DemoAccordionComponent } from './demo-accordion.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        AccordionModule,
        GridModule,
    ],
    declarations:[DemoAccordionComponent]
})
export class DemoAccordionModule{}