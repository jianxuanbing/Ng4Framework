import { Directive, Output, EventEmitter, Renderer2, ElementRef } from '@angular/core';
// 参考：https://segmentfault.com/a/1190000009149495
@Directive({
    selector:'[click.stop]'
})
export class StopPropagationDirective{
    @Output('click.stop') stopPropEvent=new EventEmitter();
    unsubscribe:()=>void;
    constructor(
        private renderer:Renderer2,
        private el:ElementRef
    ){        
    }

    ngOnInit() {
        this.unsubscribe=this.renderer.listen(this.el.nativeElement,'click',event=>{
            event.stopPropagation();
            this.stopPropEvent.emit(event);
        });
    }

    ngOnDestroy() {
        this.unsubscribe();
    }
}