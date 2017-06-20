import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
@Directive({
    selector: '[bHoverText]'
})
export class HoverTextDirective {
    @Input() private bHoverText: any;
    public div: HTMLDivElement;

    constructor(private el: ElementRef, private renderer2: Renderer2) {
        this.el.nativeElement.style.position = 'relative';
    }

    /**
     * 创建元素
     * @param {string} [show] 
     * @param {*} [content] 
     * @memberof HoverTextDirective
     */
    CreateEl(show?:string,content?:any){
        this.div=this.renderer2.createElement('div');
        // 往当前指令绑定的元素添加一个div的子元素
        this.renderer2.appendChild(this.el.nativeElement,this.div);
        // 设置div相关的样式
        this.renderer2.setStyle(this.div,'position','absolute');
        this.renderer2.setStyle(this.div,'top','60%');
        this.renderer2.setStyle(this.div,'top','30%');
        this.renderer2.setStyle(this.div,'padding','10px');
        this.renderer2.setStyle(this.div,'color','#f5f5f5');
        this.renderer2.setStyle(this.div,'cursor','pointer');
        this.renderer2.setStyle(this.div,'background-color','rgba(0,0,0,.35)');
        this.renderer2.setStyle(this.div,'border-radius','10px');
        this.renderer2.setStyle(this.div,'display','none');
        this.renderer2.addClass(this.div,'createHoverDiv');

        if(show){
            // 判断内容是否为Url
            if(content&&content.type==='url'){
                // 创建一个a标签
                const a=this.renderer2.createElement('a');
                // 设置相关的样式和属性
                this.renderer2.setStyle(a,'color','#fff');
                this.renderer2.setAttribute(a,'targe','_blank');
                this.renderer2.setAttribute(a,'href',content.data);
                a.innerText=content.data;
                // 追加到div里面
                this.renderer2.appendChild(this.div,a);
            }
            // 控制悬浮隐藏
            this.renderer2.setStyle(this.div,'display',show);
        }
    }

    /**
     * 判断内容类型
     * @param {*} e 
     * @memberof HoverTextDirective
     */
    CheckContentType(e:any){
        // url判断正则
        const urlRegex:any=/^(https?:\/\/)(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)$/;
        if(urlRegex.test(e)){
            this.CreateEl('block',{data:e,type:'url'});
        }
    }

    @HostListener('mouseenter',['this.bHoverText']) mouseEnter(e:any){
        this.CheckContentType(e);
    }

    @HostListener('mouseleave') mouseLeave(e:any){
        this.renderer2.removeChild(this.el.nativeElement,this.div);
    }
}