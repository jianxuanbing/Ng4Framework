import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit, AfterViewInit, Input, ElementRef } from '@angular/core';
@Component({
    selector:'bing-toast',
    templateUrl:'./toast.component.html',
    styleUrls:['./toast.component.scss'],
    animations:[
        trigger('toastState',[
            state('in',style({
                transform:'translateX(0)',
                opacity:1
            })),
            transition('void => *',[style({// :enter
                transform:'translateX(100%)',
                opacity:0
            }),animate('.3s ease-in-out')]),
            transition('* => void',animate('.3s ease-in-out',style({transform:'translateX(100%)',opacity:0})))// :leave
        ])
    ]
})
export class ToastComponent implements OnInit,AfterViewInit{
    @Input() delay:string;
    @Input() value:any[]=[];
    container:HTMLDivElement;

    constructor(private er:ElementRef){}

    ngOnInit() {        
    }

    ngAfterViewInit() {
        this.container=this.er.nativeElement;
    }

    close(index:number){
        this.value.splice(index,1);
    }

    removeAll(){
        this.value=[];
    }
}