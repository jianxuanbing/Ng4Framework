import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector:'app',
    encapsulation:ViewEncapsulation.None,
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
    constructor(){
        console.log('初始化组件!');
    }
    ngOnInit() {
        console.log('Ng初始化事件!');
    }
}