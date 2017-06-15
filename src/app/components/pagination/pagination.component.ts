import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector:'bing-pagination',
    templateUrl:'./pagination.component.html',
    styleUrls:['./pagination.component.scss']
})
export class PaginationComponent implements OnInit{
    @Input() paginator:any;
    @Input() activeIndex:number;
    @Input() max=5;
    lastIndex:number;
    @Output() onChange:EventEmitter<any>=new EventEmitter();
    
    constructor(){
        this.lastIndex=this.max;
    }

    sort(index:number,pag:number){
        if(this.activeIndex===this.lastIndex){
            
        }
    }

    ngOnInit() {        
    }
}