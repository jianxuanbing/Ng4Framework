import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-icon',
    templateUrl:'./icon.component.html',
    styleUrls:['./icon.component.scss']
})
export class IconComponent implements OnInit,AfterViewInit{
    @Input() icon:string;
    @Input() spin:boolean;
    @Input() size:string;
    iconClass:any;
    @ViewChild('container') container:ElementRef;

    constructor(private renderer2:Renderer2){}

    ngOnInit() {
        this.iconClass={
            'fa-spin':this.spin
        };
    }

    ngAfterViewInit() {
        const _container=this.container.nativeElement;
        if(this.size)        {
            this.renderer2.addClass(_container,'fa-'+this.size+'x');
        }
    }
}