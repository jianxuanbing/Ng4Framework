import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bg-card',
    templateUrl:'./card.component.html',
    styleUrls:['./card.component.scss']
})
export class CardComponent implements OnInit{
    @Input() direction:string;
    @Input() hover:boolean;
    cardClass={};

    constructor(){}

    ngOnInit() {
        this.cardClass={
            'bg-card-hover':this.hover
        };
    }
}