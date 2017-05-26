import { CodeModule } from './../components/code/code.module';
import { TableModule } from './../components/table/table.module';

// Angular Lib
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Customer Component Lib
import { ButtonModule } from './../components/button/button.module';

@NgModule({
    imports:[
        ButtonModule,
        TableModule,
        CodeModule        
    ]
})
export class BingNgModule {}