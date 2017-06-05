import { UEditorConfig } from './ueditor.config';
import { UEditorService } from './ueditor.service';
import { Component, AfterViewInit, OnDestroy, forwardRef, Input, Output, EventEmitter, ViewChild, ElementRef,NgZone } from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR} from '@angular/forms';

declare const window:any;
declare const UE:any;

export type EventTypes = 'destroy' | 'reset' | 'focus' | 'langReady' | 'beforeExecCommand' | 'afterExecCommand' | 'firstBeforeExecCommand' | 'beforeGetContent' | 'afterGetContent' | 'getAllHtml' | 'beforeSetContent' | 'afterSetContent' | 'selectionchange' | 'beforeSelectionChange' | 'afterSelectionChange';

@Component({
    selector:'bing-ueditor',
    template:'<textarea #host class="ueditor-textarea"></textarea><p class="loading" *ngIf="loading">{{loadingTip}}</p>',
    styles:[`.ueditor-textarea{display:none;}`],
    providers:[{
        provide:NG_VALUE_ACCESSOR,
        useExisting:forwardRef(()=>UEditorComponent),
        multi:true
    }]
})
export class UEditorComponent implements OnDestroy,ControlValueAccessor{
    private instance:any;
    private value:string;
    private path:string;
    private events:any={};

    loading:boolean=true;
    id:string;    
    
    @Input() config:any;
    @Input() loadingTip:string='加载中...';    

    @Output() onPreReady=new EventEmitter<UEditorComponent>();
    @Output() onReady=new EventEmitter<UEditorComponent>();
    @Output() onDestroy=new EventEmitter();
    @Output() onContentChange=new EventEmitter();
    

    @ViewChild('host') host:ElementRef;

    protected onChange:any=Function.prototype;
    protected onTouched:any=Function.prototype;    

    constructor(private el:ElementRef,
        private ngZone:NgZone,
        private us:UEditorService,
        private defConfig:UEditorConfig){}

    ngOnInit() {
        this.path=this.defConfig&&this.defConfig.path;
        if(!this.path){
            this.path='./assets/ueditor/';
        }

        //构建一个虚拟ID
        this.id='ueditor-'+new Date().getTime();
        this.host.nativeElement.id=this.id;
        //已经存在对象无须进入懒加载模式
        if(window.UE){
            this.init();
            return;
        }
        this.us.load(this.path,true).getChangeEmitter().subscribe(res=>{
            this.init();
        });
    }

    private init(options?:any){
        if(!window.UE){
            throw new Error('ueditor.js文件加载失败');
        }
        if(this.instance){
            return;
        }
        if(this.defConfig&&this.defConfig.hook){
            if(!this.defConfig._hook_finished){
                this.defConfig._hook_finished=true;
                this.defConfig.hook(UE);
            }
        }

        this.loading=false;
        this.onPreReady.emit(this);
        this.ngZone.runOutsideAngular(()=>{
            const opt=Object.assign({
                UEDITOR_HOME_URL:this.path
            },this.defConfig&&this.defConfig.options,this.config,options);

            let ueditor=UE.getEditor(this.id,opt);
            ueditor.ready(()=>{
                this.ngZone.run(()=>{
                    this.instance=ueditor;
                    this.value&&this.instance.setContent(this.value);
                    this.onReady.emit(this);
                });
            });

            ueditor.addListener('contentChange',()=>{
                this.updateValue(ueditor.getContent());
            });
        });
    }

    private updateValue(value:string){
        this.ngZone.run(()=>{
            this.value=value;
            this.onChange(this.value);
            this.onTouched();
            this.onContentChange.emit(this.value);
        });
    }

    private destroy(){
        if(this.instance){
            for(let ki of this.events){
                this.instance.removeListener(ki,this.events[ki]);
            }
            this.instance.removeListener('ready');
            this.instance.removeListener('contentChange');
            this.instance.destroy();
            this.instance=null;
        }
        this.onDestroy.emit();
    }

    /**
     * 获取UE实例
     */
    get Instance():any{
        return this.instance;
    }

    /**
     * 设置编辑器语言
     * @param lang 
     */
    setLanguage(lang:'zh-cn'|'en'){
        this.us.loadScript(`${this.path}/lang/${lang}/${lang}.js`).then(res=>{
            this.destroy();
            //清空语言
            if(!UE._bak_I18N){
                UE._bak_I18N=UE.I18N;
            }
            UE.I18N={};
            UE.I18N[lang]=UE._bak_I18N[lang];
            this.init();
        });
    }

    /**
     * 添加编辑器事件
     * @param eventName 
     * @param fn 
     */
    addListener(eventName:EventTypes,fn:Function):void{
        if(this.events[eventName]){
            return;
        }
        this.events[eventName]=fn;
        this.instance.addListener(eventName,fn);
    }

    /**
     * 移除编辑器事件
     * @param eventName 
     */
    removeListener(eventName:EventTypes):void{
        if(!this.events[eventName]){
            return;
        }
        this.instance.removeListener(eventName,this.events[eventName]);
        delete this.events[eventName];
    }

    ngOnDestroy() {
        this.destroy();
    }

    writeValue(value:string):void{
        this.value=value;
        if(this.instance){
            this.instance.setContent(this.value);
        }
    }

    public registerOnChange(fn:(_:any)=>{}):void{
        this.onChange=fn;
    }

    public registerOnTouched(fn:()=>{}):void{
        this.onTouched=fn;
    }

    setDisabledState(isDisabled:boolean):void{
        if(isDisabled){
            this.instance.setDisabled();            
        }else{
            this.instance.setEnabled();
        }        
    }

}