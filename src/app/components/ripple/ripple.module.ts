import { RippleDirective } from './ripple.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[RippleDirective],
    exports:[RippleDirective]
})
export class RippleModule{}