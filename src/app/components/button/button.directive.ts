import { CommonModule } from '@angular/common';
import { NgModule,Directive,OnInit,AfterViewInit,ElementRef,Input,Renderer2 } from '@angular/core';

@Directive({
    selector:'[bButton]'
})
export class ButtonDirective implements OnInit,AfterViewInit{
    /**
     * 图标-样式
     * @type {string}
     * @memberof ButtonDirective
     */
    @Input() icon:string;
    /**
     * 颜色-样式
     * @type {string}
     * @memberof ButtonDirective
     */
    @Input() color:string;
    /**
     * 图标方向
     * @memberof ButtonDirective
     */
    @Input() direction='left';
    /**
     * 形状
     * @type {string}
     * @memberof ButtonDirective
     */
    @Input() circle:string;
    /**
     * 半径
     * @type {number}
     * @memberof ButtonDirective
     */
    @Input() round:number;
    /**
     * 大小-样式
     * @type {string}
     * @memberof ButtonDirective
     */
    @Input() size:string;
    button:HTMLButtonElement;

    constructor(private er:ElementRef,private renderer2:Renderer2){

    }

    ngOnInit() {        
        if(!this.color){
            this.color='default';
        }
    }

    ngAfterViewInit() {        
        this.button=this.er.nativeElement;
        this.renderer2.addClass(this.button,'btn');
        this.renderer2.addClass(this.button,'btn-'+this.color);

        if(this.size){
            this.renderer2.addClass(this.button,'btn-'+this.size);
        }

        if(this.icon){
            const icon=this.renderer2.createElement('i');
            this.renderer2.addClass(icon,'fa');
            this.renderer2.addClass(icon,'fa-'+this.icon);
            const firstChild=this.button.firstChild;
            const lastChild=this.button.lastChild;
            if(this.direction==='left'&&firstChild){
                this.renderer2.insertBefore(this.button,icon,firstChild);
            }else{
                this.renderer2.appendChild(this.button,icon);
            }

            if(lastChild&&lastChild!==icon){
                this.renderer2.addClass(icon,'bing-btn-'+this.direction);
            }
        }

        if(this.circle){
            this.renderer2.addClass(this.button,'btn-circle');
        }
        if(this.round){
            this.renderer2.addClass(this.button,'btn-round');
        }
    }
}