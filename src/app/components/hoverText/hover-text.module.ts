import { HoverTextDirective } from './hover-text.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule]    ,
    declarations:[HoverTextDirective],
    exports:[HoverTextDirective]
})
export class HoverTextModule{}