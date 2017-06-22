import { fadeInUp } from './../../utils/animations';
import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
    selector: 'bg-demo-chip',
    templateUrl: './demo-chip.component.html',
    styleUrls: ['./demo-chip.component.scss'],
    animations: [fadeInUp]
})
export class DemoChipComponent implements OnInit {
    @HostBinding('@fadeInUpState') fadeInUpState: any;
    @HostBinding('style.display') display = 'block';

    animals: any[];
    citys: any[];
    constructor() { }

    ngOnInit() {
        this.animals = [
            { 'value': 'chip' },
            { 'value': 'chip' },
            { 'value': 'chip' },
            { 'value': 'chip' }
        ];

        this.citys = [
            { 'value': 'chip1', 'delete': true },
            { 'value': 'chip2', 'delete': true },
            { 'value': 'chip3', 'delete': true },
            { 'value': 'chip4', 'delete': true },
        ];
    }
}