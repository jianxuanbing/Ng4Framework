import { Injectable } from '@angular/core';
@Injectable()
class SwiperService{
    public swiperList:number[];
    public displayList:number[];//0:当前,1:下一个,2:上一个
    public current:number;
    private changing:boolean;

    constructor(){
        this.changing=false;
        this.swiperList=[];
        this.displayList=[];
        this.current=0;
    }

    public Add(id:number){
        this.swiperList.push(id);
        switch(this.swiperList.length){
            case 1:
                this.displayList[0]=id;
                return;
            case 2:
                this.displayList[1]=id;
                return;
            default:
                this.displayList[2]=id;
                return;
        }
    }

    public Next():Promise<any>{
        if(this.changing){
            return new Promise<any>((resolve,reject)=>{
                return reject('on changing');
            });
        }
        this.changing=true;
        let c=this.swiperList.indexOf(this.displayList[0]);
        let n=this.swiperList.indexOf(this.displayList[1]);
        let p=this.swiperList.indexOf(this.displayList[2]);
        p=c;
        c=n;
        n=(c+1)%this.swiperList.length;
        this.displayList[0]=this.swiperList[c];
        this.displayList[2]=this.swiperList[p];
        this.displayList[1]=-1;
        setTimeout(()=>{
            this.displayList[1]=this.swiperList[n];
            this.changing=false;
        },500);
        return new Promise<any>((resolve,reject)=>{
            
        })
    }


}