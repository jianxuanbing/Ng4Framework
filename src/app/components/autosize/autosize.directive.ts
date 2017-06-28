import { Directive, ElementRef, HostListener } from '@angular/core';
// 参考：https://github.com/stevepapa/angular2-autosize
@Directive({
    selector:'textarea[autosize]'
})
export class AutoSizeDirective{
    @HostListener('input',['$event.target'])
    onInput(textArea:HTMLTextAreaElement):void{
        this.adjust();
    }

    constructor(public el:ElementRef){        
    }

    ngAfterViewChecked() {
        this.adjust();
    }

    /**
     * 调整高度
     * @private
     * @memberof AutoSizeDirective
     */
    private adjust():void{
        this.el.nativeElement.style.overflow='hidden';
        //this.el.nativeElement.style.height='auto';
        this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+'px';
        
    }

}