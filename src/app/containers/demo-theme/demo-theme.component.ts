import { config } from './../../common/config';
import { fadeInUp } from './../../components/common/animations';
import { Component, OnInit, HostBinding, Renderer2 } from '@angular/core';
@Component({
    selector:'bing-demo-theme',
    templateUrl:'./demo-theme.component.html',
    styleUrls:['./demo-theme.component.scss'],
    animations:[fadeInUp]
})
export class DemoThemeComponent implements OnInit{
    @HostBinding('@fadeInUpState') state:any;
    @HostBinding('style.display') display='block';
    theme:any[]=[];
    constructor(private renderer2:Renderer2){}

    ngOnInit() {
        this.theme=config.theme;
    }

    selectTheme(value:string){            
        const className=document.body.className;
        const theme=/bing-theme-2/.test(className);
        document.body.className=theme?'bing-theme-2':'';
        this.renderer2.addClass(document.body,`bing-${value}`);
    }
}