import { DemoAccordionModule } from './../containers/demo-accordion/demo-accordion.module';
import { BingNgModule } from './bingNg.module';
import { DemoThemeModule } from './../containers/demo-theme/demo-theme.module';
import { DemoTabModule } from './../containers/demo-tab/demo-tab.module';
import { DemoJsonViewModule } from './../containers/demo-json-view/demo-json-view.module';
import { DemoGridModule } from './../containers/demo-grid/demo-grid.module';
import { MainModule } from './../containers/main/main.module';
import { IndexModule } from './../containers/index/index.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    declarations:[        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,

        IndexModule,
        MainModule,        
        DemoGridModule,
        DemoJsonViewModule,
        DemoTabModule,
        DemoThemeModule,
        DemoAccordionModule,
    ],
    providers:[
    ],
})
export class ContainerModule{}