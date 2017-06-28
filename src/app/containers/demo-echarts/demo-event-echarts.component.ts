import { EChartOption } from './../../components/echarts/echarts.api';
import { Component } from '@angular/core';
@Component({
    selector:'bg-demo-event-echarts',
    templateUrl:'./demo-event-echarts.component.html'
})
export class DemoEventEChartsComponent{
    option:EChartOption=this.createOption();

    update() {
        this.option = this.createOption();
    }

    private createOption(): EChartOption {
        return {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random(), 40 * Math.random()]
            }]
        };
    }
    
    onOptionChange(event: any){
        console.log(event);
    }
}