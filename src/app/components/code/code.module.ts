import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { ButtonModule } from './../button/button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClipboardModule } from 'ngx-clipboard';
import { CodeComponent } from './code.component';
@NgModule({
    imports:[CommonModule,ButtonModule,ClipboardModule,HighlightJsModule],
    declarations:[CodeComponent],
    exports:[CodeComponent,ButtonModule],
    providers:[
        HighlightJsService
    ]
})
export class CodeModule{}