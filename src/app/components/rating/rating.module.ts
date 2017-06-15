import { RadioComponent } from './../radio/radio.component';
import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[RatingComponent],
    exports:[RadioComponent]
})
export class RatingModule{}