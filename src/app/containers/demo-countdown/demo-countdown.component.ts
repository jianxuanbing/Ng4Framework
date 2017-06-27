import { CountDownComponent } from './../../components/countdown/countdown.component';
import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
@Component({
    selector:'bg-demo-countdown',
    templateUrl:'./demo-countdown.component.html',
    styleUrls:['./demo-countdown.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class DemoCountDownComponent{
    constructor(){

    }

    notify:string;
    config:any={
        leftTime:10,
        notify:[2,5]
    };

    onStart(){
        this.notify='开始了';
    }

    onFinished(){
        this.notify='结束了';
    }

    onNotify(time:number){
        this.notify=`在${time}ms时通知了一下`;
    }

    stopConfig:any={
        stopTime:new Date().getTime()+(1000*30)
    };

    resetStop(){
        this.stopConfig={
            stopTime:new Date().getTime()+(1000*30)
        };
    }

    @ViewChild('countdown') container:CountDownComponent;

    resetTimer(){
        this.container.restart();
    }
}