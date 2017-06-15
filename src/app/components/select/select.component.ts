import { SelectItemComponent } from './select-item.component';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, Input, EventEmitter, Output, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-select',
    templateUrl:'./select.component.html',
    styleUrls:['./select.component.scss'],
    animations:[
        trigger('selectState',[
            state('active',style({
                opacity:1
            })),
            state('inactive',style({
                opacity:0
            })),
            transition('active <=> inactive',animate('.4s ease'))
        ])
    ]
})
export class SelectComponent implements OnInit,AfterViewInit{
    _options:any;
    opened:boolean;
    activeState:string;
    value:string;
    itemClick:boolean;
    items:SelectItemComponent[]=[];
    _menu:HTMLUListElement;
    selfClick:boolean;
    @ViewChild('menu') menu:ElementRef;
    @ViewChild('input') input:ElementRef;
    @Input() placeholder:string;
    @Input() editable:boolean;
    @Input() filter:boolean;
    @Input() selected:any;
    @Output() selectedChange:EventEmitter<any>=new EventEmitter();
    @Output() onChange:EventEmitter<any>=new EventEmitter();

    @Input()
    get options():any{
        return this._options;
    }
    set options(value:any){
        this._options=value;
    }

    bindDocumentClickListener:Function;

    constructor(private renderer2:Renderer2){
        this.activeState='inactive';
    }

    ngOnInit() {        
    }

    ngAfterViewInit() {
        this._menu=this.menu.nativeElement;
        if(this.placeholder){
            this.value=this.placeholder;
        }
        if(this.selected){
            this.value=this.selected.label;
        }
    }

    addGroup(value:SelectItemComponent){
        this.items.push(value);
    }

    onDocumentClickListener(){
        if(!this.bindDocumentClickListener){
            this.bindDocumentClickListener=this.renderer2.listen('body','click',()=>{
                if(!this.selfClick&&!this.itemClick){
                    this.close();
                }
                this.itemClick=false;
                this.selfClick=false;
            });
        }
    }

    offDocumentClickListener(){
        if(this.bindDocumentClickListener){
            this.bindDocumentClickListener()
            this.bindDocumentClickListener=null;
        }
    }

    onClick(){
        if(!this.editable){
            this.open();
        }
    }

    open(){
        this.selfClick=true;
        this.activeState='active';
        this.opened=true;
        this.onDocumentClickListener();
    }

    close(){
        this.opened=false;
        this.activeState='inactive';
        this.selfClick=false;
        this.offDocumentClickListener();
    }

    transitionStart(){
        this.renderer2.setStyle(this._menu,'display','block');
    }

    transitionEnd(){
        this.renderer2.setStyle(this._menu,'display','none');
    }

    iClick($event:any){
        this.itemClick=$event;
        this.selected=$event;
        this.value=$event.label;
        this.onChange.emit($event);
        this.close();
    }

    setSelected(){
        for(const item of this.items){
            item['selected']=false;
        }
    }

}