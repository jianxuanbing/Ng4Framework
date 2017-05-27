import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-progress',
    templateUrl:'./progress.component.html',
    styleUrls:['./progress.component.scss']
})
export class ProgressComponent implements OnInit,AfterViewInit{
    @Input() value:string;
    @Input() color:string;
    @Input() move:boolean;
    @Input() striped:boolean;
    @Input() percent:boolean;
    @ViewChild('container') container:ElementRef;
    @ViewChild('bar') bar:ElementRef;

    _bar:HTMLElement;
    _container:HTMLElement;

    constructor(private renderer2:Renderer2){}

    ngOnInit() {
    }

    ngAfterViewInit() {
        this._container=this.container.nativeElement;
        this._bar=this.bar.nativeElement;
        if(this.move)        {
            this.renderer2.addClass(this._container,'bing-active');
        }
        if(this.striped){
            this.renderer2.addClass(this._container,'bing-progress-striped');
        }
        if(this.value){
            this.renderer2.setStyle(this._bar,'width',this.value);
        }
        if(this.color){
            this.renderer2.addClass(this._container,'bing-'+this.color);
        }
    }
}