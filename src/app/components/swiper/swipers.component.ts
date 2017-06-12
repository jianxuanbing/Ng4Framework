import { Component } from '@angular/core';
@Component({
    selector:'bing-swipers',
    template:'<div class="view-body"><ng-content></ng-content></div>',
    styles:[`
        .view-body{
            height:100%;
            width:100%;
            overflow:hidden;
            position:relative;
        }
    `]    
})
export class SwipersComponent{
    
}