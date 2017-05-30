import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipComponent } from './chip.component';
import { ChipGroupComponent } from './group/chipGroup.component';
@NgModule({
    imports:[CommonModule],
    declarations:[ChipComponent,ChipGroupComponent],
    exports:[ChipComponent,ChipGroupComponent]
})
export class ChipModule{}