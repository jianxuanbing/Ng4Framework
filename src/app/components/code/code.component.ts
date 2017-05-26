import { Component, OnInit, AfterViewInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HighlightJsService } from 'angular2-highlight-js';
@Component({
    selector:'bing-code',
    templateUrl:'./code.component.html'
})
export class CodeComponent implements OnInit,AfterViewInit{
    @Input() lang:string;
    @ViewChild('code') code:ElementRef;
    codeText:string;
    container:any;
    constructor(private er:ElementRef,private service:HighlightJsService,private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        this.container=this.code.nativeElement;
        this.codeText=this.format();
        this.checkCode();
    }

    format(){
        let lines=this.container.textContent.split('\n');
        let matches;
        if(lines[0]===''){
            lines.shift();
        }
        const indentation=(matches=(/^[\s\t]+/).exec(lines[0]))!==null?matches[0]:null;
        if(indentation){
            lines=lines.map(function(line:string){
                line=line.replace(indentation,'');
                return line.replace(/\t/g,'  ');
            });
            const text=lines.join('\n').trim();
            this.container.textContent=text;
            return text;
        }
    }

    checkCode(){
        if(this.lang){
            this.renderer2.addClass(this.container,this.lang);
            this.service.highlight(this.container);
        }
    }
}