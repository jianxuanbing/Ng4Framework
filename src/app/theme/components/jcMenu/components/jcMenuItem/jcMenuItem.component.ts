import { Component,ViewEncapsulation,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'jc-menu-item',
    encapsulation:ViewEncapsulation.None,
    styles:[require('./jcMenuItem.scss')],
    template:require('./jcMenuItem.html')
})
export class JcMenuItem{
    @Input() menuItem:any;
    @Input() child:boolean=false;
    @Output() itemHover=new EventEmitter<any>();
    @Output() toggleSubMenu=new EventEmitter<any>();
    /**
     * 悬停当前菜单项
     * @param {*} $event 
     * 
     * @memberof JcMenuItem
     */
    public onHoverItem($event:any):void{
        this.itemHover.emit($event);
    }
    /**
     * 切换子菜单
     * @param {*} $event 
     * @param {*} item 
     * @returns {boolean} 
     * 
     * @memberof JcMenuItem
     */
    public onToggleSubMenu($event:any,item:any):boolean{
        $event.item=item;
        this.toggleSubMenu.emit($event);
        return false;
    }
}