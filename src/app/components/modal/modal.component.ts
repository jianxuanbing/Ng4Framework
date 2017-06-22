import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-modal',
    templateUrl:'./modal.component.html',
    styleUrls:['./modal.component.scss'],
    animations:[
        trigger('fadeInScale',[
            state('active',style({
                opacity:1,
                transform:'scale(1)'
            })),
            state('inactive',style({
                opacity:0.7,
                transform:'scale(0)'
            })),
            transition('active <=> inactive',animate('.3s ease'))
        ])
    ]
})
export class ModalComponent implements OnInit{
    @Input() header:string;
    @Input() width:any;
    @Input() height:any;
    @Input() modalColor:string;
    @Input() draggable:boolean;
    @Input() closeIcon=true;
    _visible:boolean;
    @ViewChild('modal') modalViewChild:ElementRef;
    @Output() visibleChange:EventEmitter<any>=new EventEmitter();
    modal:HTMLDivElement;
    mask:HTMLDivElement;
    modalClass:string;
    maskClickListener:Function;
    @Input()
    get visible():boolean{
        return this._visible;
    }
    set visible(value:boolean){
        this._visible=value;
        if(this._visible){
            this.show();
        }else{
            this.close();
        }
    }

    constructor(public rendere2:Renderer2){}

    ngOnInit() {        
    }

    show(){
        this.center();
        this.modalClass=this.visible?'active':'inactive';
        this.addOverlay();
    }

    close(){
        this.modalClass=this.visible?'active':'inactive';
        this.visibleChange.emit(false);
        if(this.mask){
            this.rendere2.removeChild(document.body,this.mask);
        }
        this.mask=null;
    }

    addOverlay(){
        if(!this.mask){
            this.mask=document.createElement('div');
            this.mask.className='bg-modal-mask';
            this.mask.style.cssText='position: fixed;top:0;left:0;width:100%;height:100%;opacity:.5;background:#000;';
            this.mask.style.zIndex=(parseInt(this.modal.style.zIndex,10)-1)+'';
            this.maskClickListener=this.rendere2.listen(this.mask,'click',(event:any)=>{
                this.close();
            })
            document.body.appendChild(this.mask);
        }
    }

    center(){
        this.modal=this.modalViewChild.nativeElement;
        this.modal.style.zIndex='10002';
        this.modal.classList.add('bg-'+this.modalColor);
        const win={
            width:window.innerWidth,
            height:window.innerHeight
        };
        let mw={
            width:this.modal.offsetWidth,
            height:this.modal.offsetHeight
        };
        if(mw.width===0||mw.height===0){
            this.modal.style.visibility='hidden';
            this.modal.style.display='block';
            mw={
                width:this.modal.offsetWidth,
                height:this.modal.offsetHeight
            };
            this.modal.style.visibility='visible';
            this.modal.style.display='none';
        }
        this.modal.style.left=(win.width-mw.width)/2+'px';
        this.modal.style.top=(win.height-mw.height)/2+'px';
    }
}