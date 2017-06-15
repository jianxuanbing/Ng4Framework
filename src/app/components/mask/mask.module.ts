import { MaskComponent } from './mask.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[MaskComponent],
    exports:[MaskComponent]
})
export class MaskModule{}