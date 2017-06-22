import { HttpHelper } from './../../utils/httpHelper';
import { fadeInUp } from './../../utils/animations';
import { config } from './../../common/config';
import { Component, OnInit, HostBinding, Renderer2 } from '@angular/core';
@Component({
    selector:'bg-demo-theme',
    templateUrl:'./demo-theme.component.html',
    styleUrls:['./demo-theme.component.scss'],
    animations:[fadeInUp],
    providers:[HttpHelper]
})
export class DemoThemeComponent implements OnInit{
    @HostBinding('@fadeInUpState') state:any;
    @HostBinding('style.display') display='block';
    theme:any[]=[];
    constructor(private renderer2:Renderer2,private http:HttpHelper){}

    ngOnInit() {
        this.theme=config.theme;
    }

    selectTheme(value:string){            
        const className=document.body.className;
        const theme=/bg-theme-2/.test(className);
        document.body.className=theme?'bg-theme-2':'';
        this.renderer2.addClass(document.body,`bg-${value}`);
    }

    sendMsg(){
        console.log("嘿嘿嘿");
        this.http.get("/DropDownList/GetDeliveryCompanyInfo").then(data=>{
            console.log(data);
        });
    }
}