import { AccordionGroupComponent } from './accordionGroup.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ShareModule } from '../common/share';
import { AccordionComponent } from './accordion.component';
@NgModule({
    imports:[CommonModule,ShareModule],
    declarations:[AccordionComponent,AccordionGroupComponent],
    exports:[AccordionComponent,AccordionGroupComponent]
})
export class AccordionModule{}