import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-switch',
    templateUrl:'./switch.component.html',
    styleUrls:['./switch.component.scss']
})
export class SwitchComponent implements OnInit,AfterViewInit{
    @Input() label:string;
    @Input() checked:boolean;
    @Input() type:number;
    @Input() disabled:boolean;
    @Input() color:string;
    @Output() onChange:EventEmitter<any>=new EventEmitter();
    @ViewChild('container') container:ElementRef;

    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        const _container=this.container.nativeElement;
        if(this.type){
            this.renderer2.addClass(_container,'bg-switch-'+this.type);
        }
        if(this.color){
            this.renderer2.addClass(_container,'bg-switch-'+this.color);
        }
    }

    inputChange(event:any){
        this.onChange.emit(event);
    }
}