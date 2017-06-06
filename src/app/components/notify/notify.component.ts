import { Notify } from './interfaces/notify';
import { Component, ViewEncapsulation, OnInit, OnDestroy, Input, NgZone } from '@angular/core';
import {SafeHtml,DomSanitizer} from '@angular/platform-browser';
@Component({
    selector:'bing-notify',
    templateUrl:'./notify.component.html',
    styleUrls:['./notify.component.scss'],
    encapsulation:ViewEncapsulation.None
})
export class NotifyComponent implements OnInit,OnDestroy{
    @Input() public item:Notify;
    public html:SafeHtml;

    public animate:string;
    public classes:any={};

    constructor(private sanitizer:DomSanitizer,private zone:NgZone,private notifyService)
}
