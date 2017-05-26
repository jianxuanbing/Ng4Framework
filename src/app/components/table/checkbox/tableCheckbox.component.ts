import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ElementRef,ViewChild } from '@angular/core';
@Component({
    selector:'bing-tcheckbox',
    templateUrl:'./tableCheckbox.component.html'
})
export class TCheckboxComponent implements OnInit,AfterViewInit{
    @Input() checkboxName:string;
    @Input() title:string;
    @Input() checked:boolean;
    @Output() onClick:EventEmitter<any>=new EventEmitter();
    @ViewChild('rb') checkboxViewChild:ElementRef;
    checkbox:HTMLInputElement;

    constructor(){  }

    ngOnInit() {
        if(!this.checked){
            this.checked=false;
        }
    }

    ngAfterViewInit() {
        this.checkbox=this.checkboxViewChild.nativeElement;
    }

    onChange(e:Event){
        this.checked=this.checkbox.checked;
        this.onClick.emit({
            value:this.checkbox.value,
            checked:this.checkbox.checked            
        });
    }
}
