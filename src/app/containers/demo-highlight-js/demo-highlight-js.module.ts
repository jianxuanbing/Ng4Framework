import { DemoHighlightJsComponent } from './demo-highlight-js.component';
import { HighlightJsModule } from './../../components/highlight-js/highlight-js.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        HighlightJsModule
    ],
    declarations:[DemoHighlightJsComponent]
})
export class DemoHighlightJsModule{}