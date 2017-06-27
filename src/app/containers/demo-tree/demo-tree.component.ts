import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector: 'bg-demo-tree',
    templateUrl: './demo-tree.component.html',
    styleUrls: ['./demo-tree.component.scss'],
    animations: [fadeInUp]
})
export class DemoTreeComponent implements OnInit {
    @HostBinding('@fadeInUpState') fadeInUpState: any;
    @HostBinding('style.display') display = 'block';

    menus: any[] = [];
    constructor() { }

    ngOnInit() {
        this.menus = [
            {
                title: '菜单',
                folder: [
                    {
                        title: '子菜单',
                        file: [
                            {
                                title: '孙菜单'
                            }
                        ]
                    }
                ]
            },
            {
                title: '菜单',
                file: [
                    {
                        title: '子菜单'
                    }
                ]
            }
        ];
    }
}