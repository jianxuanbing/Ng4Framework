import { Component, OnInit } from '@angular/core';
@Component({
    selector:'bg-demo-json-view',
    templateUrl:'./demo-json-view.component.html' 
})
export class DemoJsonViewComponent implements OnInit{
    data:object={
        "name": "twp0217",
        "url": "https://github.com/twp0217",
        "string": "github",
        "number": 88,
        "boolean": true,
        "object": {
        "obj1": "obj1",
        "obj2": "obj2",
        "object": {
            "obj11": "obj11",
            "obj22": "obj22"
        },
        "emptyArray": []
        },
        "array": [
            1,
            2,
            3
        ],
        "null": null
    };

    customData:string="{    }";
    customJson:object;

    constructor(){}
    ngOnInit() {        
    }

    ngModelChange($event:any){
        this.customJson=JSON.parse($event);
    }
}