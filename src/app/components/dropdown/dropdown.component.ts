import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DomRenderer } from '../common/dom';
@Component({
    selector:'bing-dropdown',
    templateUrl:'./dropdown.component.html',
    styleUrls:['./dropdown.component.scss'],
    animations:[
        trigger('dropdownState',[
            state('active',style({
                transform:'scaleY(1)',
                opacity:1
            })),
            state('inactive',style({
                transform:'scaleY(0)',
                opacity:0
            })),
            transition('inactive <=> active',animate('300ms ease'))
        ])
    ],
    providers:[DomRenderer]
})
export class DropdownComponent implements OnInit{
    @Input() menus:any;
    @Input() header:string;
    @Input() direction='left';
    @Input() dropdownStateClass:string;
    @Input() color:string;
    @Input() caret=true;
    @ViewChild('btn') button:ElementRef;
    @ViewChild('container') container:ElementRef;
    @ViewChild('dropdownMenu') dropdownMenu:ElementRef;

    isOpen:boolean;
    selfClick:boolean;
    itemClick:boolean;
    documentClickListener:any;
    modal:any;

    constructor(private domRenderer:DomRenderer,private renderer2:Renderer2){

    }

    ngOnInit() {
        this.dropdownStateClass=this.isOpen?'active':'inactive';
    }

    onMouseClick($event:any){
        if(!this.isOpen){
            this.isOpen=!this.isOpen;
            this.modal=this.renderer2.createElement('div');
            this.renderer2.addClass(this.modal,'bing-dropdown-menu');
            this.renderer2.appendChild(this.modal,this.dropdownMenu.nativeElement);
            const menu=this.modal.querySelector('ul');
            menu.style.display='block';
            this.renderer2.removeClass(menu,'open');
            const rect=this.domRenderer.getRect(this.button.nativeElement);
            this.renderer2.setStyle(menu,'top',(rect.top+rect.height)+'px');
            this.renderer2.appendChild(document.body,this.modal);
            if(this.direction==='left'){
                this.renderer2.setStyle(menu,'left',rect.left+'px');
            }else{
                this.renderer2.setStyle(menu,'transform-origin','top right 0');
                this.renderer2.setStyle(menu,'left',(rect.rigth-menu.offsetWidth)+'px');
            }
            const width=menu.offsetWidth;
            this.renderer2.addClass(menu,'open');
            if(this.isOpen){
                this.selfClick=true;
                this.onDocumentClickListener();
            }
            this.dropdownStateClass=this.isOpen?'active':'inactive';
        }else{
            this.close();
        }
    }

    onItemClick($event:any){
        this.itemClick=true;
    }

    onDocumentClickListener(){
        if(!this.documentClickListener){
            // 给body绑定点击事件
            this.documentClickListener=this.renderer2.listen('body','click',()=>{
                if(!this.selfClick&&!this.itemClick){
                    this.close();
                }
                this.selfClick=false;
                this.itemClick=false;
            });
        }
    }

    close(){
        this.isOpen=false;
        this.dropdownStateClass=this.isOpen?'active':'inactive';
        this.renderer2.removeChild(document.body,this.modal);
        this.modal=null;
        this.offDocumentClickListener();
    }

    offDocumentClickListener(){
        if(this.documentClickListener){
            this.documentClickListener();
            this.documentClickListener=null;
        }
    }
}