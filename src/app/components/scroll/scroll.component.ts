import { style } from '@angular/animations';
import { DomRenderer } from './../common/dom';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
    selector:'bing-scroll',
    templateUrl:'./scroll.component.html',
    styleUrls:['./scroll.component.scss'],
    providers:[DomRenderer]
})
export class ScrollComponent implements OnInit,AfterViewInit{
    @ViewChild('scroll') _container:ElementRef;
    @ViewChild('thumb') _thumb:ElementRef;
    @ViewChild('scrollbar') _scrollbar:ElementRef;
    @Input() scrollClass:string;
    thumb:any;
    scrollbar:any;
    scrollHeight: number;
    offsetHeight: number;
    offsetTop: number;
    scrollBarHeight: number;
    scrollTop: number;
    isLoading: boolean;
    isRunning: boolean;
    container:any;
    wrapper:any;
    moveY: number;
    intervalId:any;
    isTouch: boolean;

    isMoz:boolean;
    WHEEL_EV:any;

    constructor(private domRenderer:DomRenderer,private er:ElementRef){}

    ngOnInit() {
        // 检查是否FireFox浏览器
        this.isMoz='MoztTransform' in document.createElement('div').style;
        this.WHEEL_EV=this.isMoz?'DOMMouseScroll':'mousewheel';
    }

    ngAfterViewInit() {
        this.container=this._container.nativeElement;
        this.thumb=this._thumb.nativeElement;
        this.scrollbar=this._scrollbar.nativeElement;
        this.wrapper=this.container.querySelector('.bing-scroll-wrapper');
        this.scrollClass&&this.domRenderer.addClass(this.container,this.scrollClass);
        this.scrollInit();
    }

    onMouseEnter(){
        if(this.scrollTop>0){
            this.scrollbar.style.opacity=1;
        }
        this.isTouch=true;
    }

    onMouseLeave(){
        this.scrollbar.style.opacity=0;
        this.isTouch=false;
    }

    refresh(){
        this.scrollHeight=this.wrapper.offsetHeight;
        this.offsetHeight=this.container.offsetHeight;
        this.offsetTop=0;
        
    }
}