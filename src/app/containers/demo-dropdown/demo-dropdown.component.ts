import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector: 'bg-demo-dropdown',
    templateUrl: './demo-dropdown.component.html',
    styleUrls: ['./demo-dropdown.component.scss'],
    animations: [fadeInUp]
})
export class DemoDropdownComponent implements OnInit {
    @HostBinding('@fadeInUpState') fadeInUpState: any;
    @HostBinding('style.display') display = 'block';

    menus: any[] = [];

    constructor() { }

    ngOnInit() {
        this.menus = [{
            'name': 'TGCode',
            'icon': 'user'
        }, {
            'name': '邮件',
            'icon': 'envelope'
        }, {
            'name': '帮助',
            'icon': 'question-circle'
        }, {
            'name': '设置',
            'icon': 'cog'
        }, {
            'name': '登出',
            'icon': 'sign-out'
        }];
    }
}