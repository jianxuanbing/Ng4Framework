import { DomRenderer } from './../common/dom';
import { PopoverComponent } from './popover.component';
import { ButtonModule } from './../button/button.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule,ButtonModule],
    declarations:[PopoverComponent],
    exports:[PopoverComponent]    ,
    providers:[DomRenderer]
})
export class PopoverModule{}