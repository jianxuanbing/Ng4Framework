import { HighlightJsModule } from './../../components/highlight-js/highlight-js.module';
import { DemoCountDownComponent } from './demo-countdown.component';
import { CountDownModule } from './../../components/countdown/countdown.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        CountDownModule,
        HighlightJsModule,
    ],
    declarations:[DemoCountDownComponent]
})
export class DemoCountDownModule{}