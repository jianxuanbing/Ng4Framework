import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { Router, Routes, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

import { JcMenuService } from './jcMenu.service';
import { GlobalState } from './../../../global.state';


@Component({
    selector:'jc-menu',
    encapsulation:ViewEncapsulation.None,
    styles:[require('./jcMenu.scss')],
    template:require('./jcMenu.html'),
    providers:[JcMenuService]
})
export class JcMenu{
    @Input() menuRoutes:Routes=[];
    @Input() sidebarCollapsed:boolean=false;
    @Input() menuHeight:number;
    @Output() expandMenu=new EventEmitter<any>();
    public menuItems:any[];
    public showHoverElem:boolean;
    public hoverElemHeight:number;
    public hoverElemTop:number;
    public outOfArea:number=-200;
    protected _onRouteChange:Subscription;

    constructor(private _router:Router,private _service:JcMenuService,private _state:GlobalState){

    }

    public selectMenuAndNotify():void{

    }

    public ngOnInit():void{
        this.menuItems=this._service.convertRoutesToMenus(this.menuRoutes);
    }

    public ngOnDestroy() :void{
        this._onRouteChange.unsubscribe();
    }

    public hoverItem($event:any):void{
        this.showHoverElem=true;
        this.hoverElemHeight=$event.currentTarget.clientHeight;
        this.hoverElemTop=$event.currentTarget.getBoundingClientRect().top-45;
    }

    // public toggleSubMenu($event:any):boolean{
    //     var submenu=
    // }
}