import { HamburgeComponent } from './hamburge.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[HamburgeComponent],
    exports:[HamburgeComponent]
})
export class HamburgeModule{}