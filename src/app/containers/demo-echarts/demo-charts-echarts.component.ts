import { Component, AfterContentInit } from '@angular/core';
declare const require:any;
declare const PR:any;
@Component({
    selector:'bg-demo-charts-echarts',
    templateUrl:'./demo-charts-echarts.component.html'
})
export class DemoChartsEChartsComponent implements AfterContentInit{
    basicHtml=require('!!html-loader!./demo-basic-echarts.component.html');
    basicTs=require('!!raw-loader!./demo-basic-echarts.component.ts');

    themeHtml=require('!!html-loader!./demo-theme-echarts.component.html');
    themeTs=require('!!raw-loader!./demo-theme-echarts.component.ts');

    settingHtml=require('!!html-loader!./demo-setting-echarts.component.html');
    settingTs=require('!!raw-loader!./demo-setting-echarts.component.ts');

    eventHtml=require('!!html-loader!./demo-event-echarts.component.html');
    eventTs=require('!!raw-loader!./demo-event-echarts.component.ts');

    methodHtml=require('!!html-loader!./demo-method-echarts.component.html');
    methodTs=require('!!raw-loader!./demo-method-echarts.component.ts');

    calendarHtml=require('!!html-loader!./demo-calendar-echarts.component.html');
    calendarTs=require('!!raw-loader!./demo-calendar-echarts.component.ts');

    ngAfterContentInit() {
        setTimeout(()=>{
            if(typeof PR!=='undefined'){
                PR.prettyPrint();
            }
        },300);
    }
}