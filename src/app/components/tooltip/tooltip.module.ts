import { TooltipDirective } from './tooltip.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[TooltipDirective],
    exports:[TooltipDirective]
})
export class TooltipModule{}