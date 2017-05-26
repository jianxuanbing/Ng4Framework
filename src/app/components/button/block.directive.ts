import { Directive, AfterViewInit, Renderer2, ElementRef } from '@angular/core';
@Directive({
    selector:'[bButton][block]'
})
export class BlockDirective implements AfterViewInit{
    constructor(private renderer2:Renderer2,private er:ElementRef){

    }

    ngAfterViewInit() {
        this.renderer2.addClass(this.er.nativeElement,'btn-block');
    }
}