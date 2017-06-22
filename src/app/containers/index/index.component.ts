import { DomRenderer } from './../../utils/dom';
import { config } from './../../common/config';
import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, Renderer2 } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Title} from '@angular/platform-browser';

import {menuList} from './index';

@Component({
    selector:'bg-root',
    templateUrl:'./index.component.html',
    styleUrls:['./index.component.scss'],
    providers:[DomRenderer]
})
export class IndexComponent implements OnInit,AfterViewInit,OnDestroy{
    title:string;
    icon:string;
    menuItem:any;
    dropdownItem:any;
    isMini:boolean;
    menus:any[]=[];
    searchForm:FormGroup;
    theme:any[]=[];
    isOpen:boolean;
    searchState:boolean;
    @HostListener('window:resize') onResize(){
        console.log(1);
    }

    constructor(private renderer2:Renderer2
        ,private fb:FormBuilder
        ,private route:ActivatedRoute
        ,private domRenderer:DomRenderer
        ,private pageTitle:Title
        ){            
        }

    ngOnInit() {
        this.title='首页';
        this.icon='laptop';
        this.menuItem=[{'name':'首页'},{'name':''}];
        this.dropdownItem=[{
            'name':'TGCode',
            'icon':'user'
        },{
            'name':'邮件',
            'icon':'envelope'
        },{
            'name':'帮助',
            'icon':'question-circle'
        },{
            'name':'设置',
            'icon':'cog'
        },{
            'name':'登出',
            'icon':'sign-out'
        }];
        this.searchForm=this.fb.group({
            'keyword':['']
        });
        this.menus=menuList;
        this.theme=config.theme;
    }

    ngAfterViewInit() {
        const prefix=this.domRenderer.getWebType();
        this.renderer2.listen('document','fullscreenchange',function(){
            this.isOpen=!this.isOpen;
        });
    }

    fullscreenToggle(){
        this.domRenderer.toggleFullScreen();
    }

    ngOnDestroy() {        
    }

    toggleAside(){
        this.isMini=!this.isMini;
        if(this.isMini){
            this.renderer2.addClass(document.body,'bg-mini');            
        }else{
            this.renderer2.removeClass(document.body,'bg-mini');
        }
    }

    toggleSearch(){
        this.searchState=!this.searchState;
    }

    onActivate(component:any){
        let title=component.pageTitle;
        if(!title){
            title='bgNG';
        }
        this.pageTitle.setTitle(title);
    }

    onDeactivate(component:any){        
    }
}