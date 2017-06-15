import { SpinnerComponent } from './spinner.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule,FormsModule],
    declarations:[SpinnerComponent],
    exports:[SpinnerComponent]
})
export class SpinnerModule{}