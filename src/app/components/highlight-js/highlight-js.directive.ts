import { Directive, OnInit, OnDestroy, Input, ElementRef } from '@angular/core';

declare const hljs:any;
declare const document:any;
// 参考地址：https://github.com/cipchk/ngx-highlight-js
@Directive({
    selector:'[bg-highlight-js]',
    host:{
        'style':'display:none;'
    }
})
export class HighlightJsDirective implements OnInit,OnDestroy{
    @Input() options:any;
    @Input() lang:string;

    protected codeEl:any;
    protected parentEl:any;

    constructor(private el:ElementRef){}

    ngOnInit() {
        this.codeEl=document.createElement('pre');
        if(this.lang){
            this.codeEl.className=this.lang;
        }
        this.codeEl.innerHTML=''+this.el.nativeElement.innerHTML.trim();
        this.parentEl=this.el.nativeElement.parentNode;
        this.parentEl.insertBefore(this.codeEl,this.el.nativeElement.nextSibling);

        hljs.configure(Object.assign({},this.options));
        hljs.highlightBlock(this.codeEl);        
    }

    ngOnDestroy() :void{
        if(this.codeEl){
            this.parentEl.removeChild(this.codeEl);
            this.codeEl=null;
        }
    }
}