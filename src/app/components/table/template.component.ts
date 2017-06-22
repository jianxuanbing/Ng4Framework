import { Component, OnInit, Input, ViewContainerRef, EmbeddedViewRef } from '@angular/core';
@Component({
    selector:'bg-template',
    template:''
})
export class TemplateComponent implements OnInit{
    @Input() template:any;
    view:EmbeddedViewRef<any>;

    constructor(public viewContainer:ViewContainerRef){}

    ngOnInit(){
        this.view=this.viewContainer.createEmbeddedView(this.template,{});
    }

}