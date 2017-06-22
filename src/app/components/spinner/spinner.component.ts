import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-spinner',
    templateUrl:'./spinner.component.html',
    styleUrls:['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit,AfterViewInit{
    @Input() value=0;
    @Input() step=1;
    @Input() min:number;
    @Input() max:number;
    @ViewChild('minus') minus:ElementRef;
    @ViewChild('add') add:ElementRef;
    @Output() onChange:EventEmitter<any>=new EventEmitter();

    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        if((this.min&&this.value<=this.min)||(this.max&&this.max<=this.value)){
            this.renderer2.setAttribute(this.minus.nativeElement,'disabled','true');
        }
    }

    onAdd(event:any){
        if(this.max&&this.max<=this.value){
            this.value=this.max;
            this.renderer2.setAttribute(this.add.nativeElement,'disabled','true');
        }else{
            this.value+=this.step;
            this.renderer2.removeAttribute(this.add.nativeElement,'disabled');
        }
        this.onChange.emit(this.value);
    }

    onMinus(event:any){
        if(this.min&&this.value<=this.min){
            this.value=this.min;
            this.renderer2.setAttribute(this.minus.nativeElement,'disabled','true');
        }else{
            this.value-=this.step;
            this.renderer2.removeAttribute(this.minus.nativeElement,'disabled');
        }
        this.onChange.emit(this.value);
    }
}