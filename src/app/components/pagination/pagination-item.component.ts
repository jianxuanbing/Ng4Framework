import { Component, OnInit, Input } from '@angular/core';
@Component({
    selector:'bing-pagination-item',
    templateUrl:'./pagination-item.component.html'
})
export class PaginationItemComponent implements OnInit{
    @Input() label:number;
    ngOnInit() {        
    }
}