//import { routes } from './../../../maps/app-routing.module';
import { Injectable } from '@angular/core';
import { Router,Routes } from '@angular/router';

@Injectable()
export class JcMenuService{
    protected _currentMenuItem={};

    constructor(private _router:Router){

    }

    /**
     * 转换路由为菜单按钮
     * @param {Routes} routes 
     * @returns {any[]} 
     * 
     * @memberof JcMenuService
     */
    public convertRoutesToMenus(routes:Routes):any[]{
        let items=this._convertArrayToItems(routes);
        return this._skipEmpty(items);
    }

    /**
     * 获取当前菜单项
     * @returns {*} 
     * 
     * @memberof JcMenuService
     */
    public getCurrentItem():any{
        return this._currentMenuItem;
    }
    
    /**
     * 选择菜单项
     * @param {any[]} menuItems 
     * @returns {any[]} 
     * 
     * @memberof JcMenuService
     */
    public selectMenuItem(menuItems:any[]):any[]{
        let items:any[]=[];
        menuItems.forEach((item)=>{
            this._selectItem(item);

            if(item.selected){
                this._currentMenuItem=item;
            }

            if(item.children&&item.children.length>0){
                item.children=this.selectMenuItem(item.children);
            }
            items.push(item);
        })
        return items;
    }

    protected _skipEmpty(items:any[]):any[]{
        let menu:any[]=[];
        items.forEach((item)=>{
            let menuItem;
            if(item.skip){
                if(item.children&&item.children.length>0){
                    menuItem=item.children;
                }
            }else{
                menuItem=item;
            }

            if(menuItem){
                menu.push(menuItem);
            }
        });
        return [].concat.apply([],menu);
    }

    protected _convertArrayToItems(routes:any[],parent?:any):any[]{
        let items:any[]=[];
        routes.forEach((route)=>{
            items.push(this._convertObjectToItem(route,parent));
        });
        return items;
    }

    protected _convertObjectToItem(object:any,parent?:any):any{
        let item:any={};

        if(object.data&&object.data.menu){
            item=object.data.menu;
            item.route=object;
            delete item.route.data.menu;
        }else{
            item.route=object;
            item.skip=true;
        }

        // 如果有路径集合，则进行构建该路径
        if(Array.isArray(item.route.path)){
            item.route.paths=item.route.path;
        }else{
            item.route.paths=parent&&parent.route&&parent.route.paths?parent.route.paths.slice(0):['/'];
            if(!!item.route.path){
                item.route.paths.push(item.route.path);
            }
        }
        // 如果当前项有子菜单，则进行解析子菜单
        if(object.children&&object.children.length>0){
            item.children=this._convertArrayToItems(object.children,item);
        }

        let prepared=this._prepareItem(item);

        // 如果当前项被选中或展开，那么其父项也展开
        if((prepared.selected||prepared.expanded)&&parent){
            parent.expanded=true;
        }

        return prepared;
    }

    protected _prepareItem(object:any):any{
        if(!object.skip){
            object.target=object.target||'';
            object.pathMatch=object.pathMatch||'full';
            return this._selectItem(object);
        }
        return object;
    }

    protected _selectItem(object:any):any{
        object.selected=this._router.isActive(this._router.createUrlTree(object.route.paths),object.pathMatch==='full');
        return object;
    }
}