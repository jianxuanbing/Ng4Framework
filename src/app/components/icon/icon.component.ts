import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-icon',
    templateUrl:'./icon.component.html',
    styleUrls:['./icon.component.scss']
})
export class IconComponent implements OnInit,AfterViewInit{

    /**
     * 图标名
     * @type {string}@memberof IconComponent
     */
    @Input() type:string;

    /**
     * 是否旋转
     * @type {boolean}@memberof IconComponent
     */
    @Input() spin:boolean;

    /**
     * 图标大小
     * @type {(string|number)}@memberof IconComponent
     */
    @Input() size:string|number;

    /**
     * 颜色
     * @type {string}@memberof IconComponent
     */
    @Input() color:string;

    private iconClass:any;
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
            this.renderer2.setStyle(_container,'font-size',`${this.size}px`);
        }
        if(this.color){
            this.renderer2.setStyle(_container,'color',this.color);
        }
    }
}