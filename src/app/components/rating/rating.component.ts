import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-rating',
    templateUrl:'./rating.component.html',
    styleUrls:['./rating.component.scss']
})
export class RatingComponent implements OnInit,AfterViewInit{
    @Input() stars=5;
    @Input() type='star';
    @Input() value:number;
    @Input() readonly:boolean;
    @Input() color:string;
    starArray:Number[];
    @ViewChild('container') container:ElementRef;
    @Output() onChange:EventEmitter<any>=new EventEmitter();

    constructor(private renderer2:Renderer2){}

    ngOnInit() {
        this.starArray=[];
        for(let i=0;i<this.stars;i++){
            this.starArray.push(i);
        }
    }

    ngAfterViewInit() {
        if(this.color){
            this.renderer2.addClass(this.container.nativeElement,`bg-${this.color}`);
        }
    }

    onClick($event:any,value:number){
        if(!this.readonly){
            this.value=value+1;
            this.onChange.emit(this.value);
        }
    }
}