import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-hamburge',
    templateUrl:'./hamburge.component.html',
    styleUrls:['./hamburge.component.scss']
})
export class HamburgeComponent implements OnInit{
    isOpen:boolean;
    @Input() type:string;
    @ViewChild('container') container:ElementRef;
    @HostListener('click')
    onClick(){
        console.log(123);
        const con=this.container.nativeElement;
        this.isOpen=!this.isOpen;
        if(this.isOpen){
            this.renderer2.addClass(con,'hamburge-open');
        }else{
            this.renderer2.removeClass(con,'hamburge-open');
        }
    }

    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }
}