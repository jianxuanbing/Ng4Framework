import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-list',
    templateUrl:'./list.component.html',
    styleUrls:['./list.component.scss']
})
export class ListComponent implements OnInit,AfterViewInit{
    @Input() hover:boolean;
    @Input() line:boolean;
    @ViewChild('list') list:ElementRef;
    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        const list=this.list.nativeElement;
        if(this.hover){
            this.renderer2.addClass(list,'bing-list-hover');
        }
        if(this.line){
            this.renderer2.addClass(list,'bing-list-line');
        }
    }
}