import { Component, OnInit, AfterContentInit, Input, ViewChild, ElementRef, ContentChildren, QueryList, Renderer2 } from '@angular/core';
import {TabComponent} from './tab.component';
@Component({
    selector:'bing-tab-group',
    templateUrl:'./tab-group.component.html',
    styleUrls:['./tab.component.scss']
})
export class TabGroupComponent implements OnInit,AfterContentInit{
    @Input() theme:string;
    @ViewChild('group') groups:ElementRef;
    @ViewChild('nav') nav:ElementRef;
    @ContentChildren(TabComponent) tabGroup:QueryList<TabComponent>;
    @Input() direction:string;
    tabs:TabComponent[];
    @Input() activeIndex=0;

    constructor(private renderer2:Renderer2){}

    ngOnInit() {        
    }

    ngAfterContentInit() {
        this.tabInit();
        if(this.theme){
            this.renderer2.addClass(this.groups.nativeElement,'theme-'+this.theme);            
        }
        if(this.direction){
            this.renderer2.addClass(this.groups.nativeElement,'bing-tab-'+this.direction);
        }
    }

    tabInit(){
        this.tabs=this.tabGroup.toArray();
        this.open(this.activeIndex);
    }

    open(index:number=0){
        if(this.activeIndex>=0&&this.activeIndex<this.tabs.length){
            const tabs=this.tabs;
            for(const tab of tabs){
                tab.setActive(false);
            }
            this.activeIndex=index;
            this.tabs[this.activeIndex].setActive(true);
        }
    }

    tabClick(index:number){
        this.open(index);
    }
}