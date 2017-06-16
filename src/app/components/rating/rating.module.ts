import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[RatingComponent],
    exports:[RatingComponent]
})
export class RatingModule{}