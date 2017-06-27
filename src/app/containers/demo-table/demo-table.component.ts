import { Component, OnInit, HostBinding } from '@angular/core';
import { fadeInUp } from '../../utils/animations';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'bg-demo-table',
    templateUrl: './demo-table.component.html',
    styleUrls: ['./demo-table.component.scss'],
    animations: [fadeInUp]
})
export class DemoTableComponent implements OnInit {
    @HostBinding('@fadeInUpState') fadeInUpState: any;
    @HostBinding('style.display') display = 'block';

    cells: any[] = [];

    constructor(private title: Title) {
        this.title.setTitle('BingAngular-Table');
    }

    ngOnInit() {
        this.cells = [
            {
                'pro': 'theme',
                'intro': '设置Table主题'
            },
            {
                'pro': 'theme',
                'intro': '设置Table主题'
            },
            {
                'pro': 'theme',
                'intro': '设置Table主题'
            }
        ];
    }
}