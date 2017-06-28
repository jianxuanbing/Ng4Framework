import { DemoThemeEChartsComponent } from './demo-theme-echarts.component';
import { DemoSettingEChartsComponent } from './demo-setting-echarts.component';
import { DemoMethodEChartsComponent } from './demo-method-echarts.component';
import { DemoEventEChartsComponent } from './demo-event-echarts.component';
import { DemoCalendarEChartsComponent } from './demo-calendar-echarts.component';
import { DemoBasicEChartsComponent } from './demo-basic-echarts.component';
import { DemoChartsEChartsComponent } from './demo-charts-echarts.component';
import { ECahrtsModule } from './../../components/echarts/echarts.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        ECahrtsModule,
    ],
    declarations:[
        DemoChartsEChartsComponent,
        DemoBasicEChartsComponent,
        DemoCalendarEChartsComponent,
        DemoEventEChartsComponent,
        DemoMethodEChartsComponent,
        DemoSettingEChartsComponent,
        DemoThemeEChartsComponent,
    ],
    exports:[
        DemoChartsEChartsComponent,
        DemoBasicEChartsComponent,
        DemoCalendarEChartsComponent,
        DemoEventEChartsComponent,
        DemoMethodEChartsComponent,
        DemoSettingEChartsComponent,
        DemoThemeEChartsComponent,
    ]    
})
export class DemoChartsEChartsModule{}