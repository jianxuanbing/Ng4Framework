import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-radio',
    templateUrl:'./radio.component.html',
    styleUrls:['./radio.component.scss']
})
export class RadioComponent implements OnInit,AfterViewInit{
    @Input() name:string;
    @Input() label:string;
    @Input() checked:boolean;
    @Input() disabled:boolean;
    @Input() value:any;
    @Input() color:string;
    @Output() onClick:EventEmitter<any>=new EventEmitter();
    @ViewChild('container') container:ElementRef;

    constructor(private renderer2:Renderer2){}
    ngOnInit() {        
    }

    ngAfterViewInit() {
        if(this.color){
            this.renderer2.addClass(this.container.nativeElement,'bg-'+this.color);
        }
    }

    onChange(e:any){
        if(!this.disabled){
            e=e.target;
            this.checked=e.checked;
            this.onClick.emit({
                name:e.name,
                value:e.value,
                checked:e.checked
            });
        }
    }
}