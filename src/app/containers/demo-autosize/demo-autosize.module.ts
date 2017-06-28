import { DemoAutoSizeComponent } from './demo-autosize.component';
import { AutoSizeModule } from './../../components/autosize/autosize.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        AutoSizeModule
    ],
    declarations:[DemoAutoSizeComponent]
})
export class DemoAutoSizeModule{}