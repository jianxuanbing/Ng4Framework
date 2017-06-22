import { DemoCalendarComponent } from './demo-calendar.component';
import { GridModule } from './../../components/grid/grid.module';
import { PanelModule } from './../../components/panel/panel.module';
import { CalendarModule } from './../../components/calendar/calendar.module';
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
        CalendarModule,
        PanelModule,
        GridModule
    ],
    declarations:[DemoCalendarComponent]
})
export class DemoCalendarModule{}