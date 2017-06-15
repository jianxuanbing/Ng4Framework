import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-loading',
    templateUrl:'./loading.component.html',
    styleUrls:['./loading.component.scss']
})
export class LoadingComponent implements OnInit,AfterViewInit{
    @Input() type:string;
    @Input() color:string;
    @ViewChild('container') container:ElementRef;
    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        if(this.color){
            this.renderer2.addClass(this.container.nativeElement,`bing-${this.color}`);
        }
    }
}