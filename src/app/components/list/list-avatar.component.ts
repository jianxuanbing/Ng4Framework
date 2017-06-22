import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-avatar',
    templateUrl:'./list-avatar.component.html'
})
export class ListAvatarComponent implements AfterViewInit{
    @Input() large:boolean;
    @ViewChild('avatar') avatar:ElementRef;
    constructor(private renderer2:Renderer2){}

    ngAfterViewInit() {
        if(this.large){
            this.renderer2.addClass(this.avatar.nativeElement,'bg-avatar-large');
        }
    }
}