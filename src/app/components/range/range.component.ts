import { DomRenderer } from './../common/dom';
import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-range',
    templateUrl:'./range.component.html',
    styleUrls:['./range.component.scss'],
    providers:[DomRenderer]
})
export class RangeComponent implements OnInit,AfterViewInit{
    isTouch:boolean;
    touchstart:any=null;
    touchmove:any=null;
    touchend:any=null;
    timeoutID:any=null;
    input:any;
    @Input() min:any=0;
    @Input() max:any=100;
    @Input() value:any=0;
    @Input() width:any=150;
    @Input() color:string;
    @Output() onChange:EventEmitter<any>=new EventEmitter();
    @ViewChild('range') _range:ElementRef;
    @ViewChild('tooltip') _tooltip:ElementRef;
    @ViewChild('thumb') _thumb:ElementRef;
    @ViewChild('track') _track:ElementRef;
    tooltip:HTMLDivElement;
    range:HTMLDivElement;
    thumb:HTMLDivElement;
    track:HTMLDivElement;
    maxPercent:any=100;
    percent:any;
    isPressed:boolean;
    documentTouchmoveListener:any;
    documentTouchendListener:any;

    constructor(private renderer2:Renderer2,private domRenderer:DomRenderer){}

    ngOnInit() {
        this.isTouch=('ontouchend' in document);
        if(this.isTouch){
            this.touchstart='touchstart';
            this.touchmove='touchmove';
            this.touchend='touchend';
        }else{
            this.touchstart='mousedown';
            this.touchmove='mousemove';
            this.touchend='mouseup';
        }
    }

    ngAfterViewInit() {
        this.tooltip=this._tooltip.nativeElement;
        this.range=this._range.nativeElement;
        this.thumb=this._thumb.nativeElement;
        this.track=this._track.nativeElement;
        if(this.color){
            this.renderer2.addClass(this.range,`bing-${this.color}`);
        }
        this.pageInit();
    }

    pageInit(){
        // 计算当前值的百分比
        const t=this.max-this.min;
        const p=(this.value-this.min)/t;
        const current=Math.floor(p*this.range.offsetWidth);
        if(!isNaN(current)){
            this.setValue(current);
        }
    }

    getPoint(element:any,event:any){
        /*将当前的触摸点坐标值减去元素的偏移位置，返回触摸点相对于element的坐标值*/
        event=event||window.event;
        const touchEvent=this.isTouch?event.changedTouches[0]:event;
        const rect=this.domRenderer.getRect(element);
        let x=(touchEvent.pageX||touchEvent.clientX+document.body.scrollLeft+document.documentElement.scrollLeft);
        x-=rect.left;
        let y=(touchEvent.pageY||touchEvent.clientY+document.body.scrollTop+document.documentElement.scrollTop);
        y-=rect.top;
        return {
            x:x,
            y:y
        };
    }

    setValue(value:number){
        let percent=value/this.range.offsetWidth*this.maxPercent;
        if(percent>=this.maxPercent){
            percent=this.maxPercent;            
        }else if(percent<=0){
            percent=0;
        }
        percent=parseFloat(percent.toFixed(4));
        // 计算真实百分比
        const t=this.max-this.min;
        const cp=Math.ceil(t*percent/100)+this.min;
        this.thumb['style'].left=percent+'%';
        this.track['style'].right=(this.maxPercent-percent)+'%';
        this.value=cp;
        this.percent=percent;

        const currentPercent=percent/this.maxPercent;
        const left=Math.floor(this.range.offsetWidth*currentPercent-this.tooltip.offsetWidth/2);
        this.tooltip.textContent=this.value;
        this.domRenderer.setTransform(this.tooltip,'translate3d('+left+'px,-100%,0)');
    }

    getValue(e:any){
        const v=this.getPoint(this.range,e);
        this.setValue(v.x);
        this.onChange.emit({'value':this.value});
    }

    onTouchStart(e:any){
        if(e.button){
            return;
        }
        clearTimeout(this.timeoutID);
        this.getValue(e);
        this.show(this.tooltip);
        this.isPressed=true;
        this.documentTouchmoveListener=this.renderer2.listen('body',this.touchmove,($event)=>{
            this.onTouchmove($event);
        });
        this.documentTouchendListener=this.renderer2.listen('body',this.touchend,($event)=>{
            this.onTouchend($event);
        });
    }

    onTouchmove(e:any){
        if(this.isPressed){
            this.show(this.tooltip);
            this.getValue(e);
        }
    }

    onTouchend(e:any){
        this.isPressed=false;
        this.hide(this.tooltip);
        this.documentTouchmoveListener();
        this.documentTouchendListener();
        this.documentTouchendListener=null;
        this.documentTouchmoveListener=null;
    }

    hide(dom:any){
        this.timeoutID=setTimeout(function(){
            dom.style.display='none';
        },200);
    }

    show(dom:any){
        dom.style.display='block';
    }    
}