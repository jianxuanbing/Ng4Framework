import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'bg-demo-shrink',
    templateUrl: './demo-shrink.component.html',
    styleUrls: ['./demo-shrink.component.scss']
})
export class DemoShrinkComponent implements OnInit {
    menus: any;
    constructor() {
        this.menus = [
            { 'icon': 'user' },
            { 'icon': 'user' },
            { 'icon': 'user' }
        ];
    }

    ngOnInit() {        
    }
}