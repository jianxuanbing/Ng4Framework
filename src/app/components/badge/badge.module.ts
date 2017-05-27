import { BadgeComponent } from './badge.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[BadgeComponent],
    exports:[BadgeComponent]
})
export class BadgeModule{}