import { AccordionModule } from './../../components/accordion/accordion.module';
import { RippleModule } from './../../components/ripple/ripple.module';
import { IconModule } from './../../components/icon/icon.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollModule } from './../../components/scroll/scroll.module';
import { IndexComponent } from './index.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,        
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        ScrollModule,
        IconModule,
        RippleModule,
        AccordionModule
    ],
    declarations:[IndexComponent]
})
export class IndexModule{}