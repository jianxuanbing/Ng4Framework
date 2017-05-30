import { DropdownComponent } from './dropdown.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from '../button/button.module';
@NgModule({
    imports:[CommonModule,ButtonModule],
    declarations:[DropdownComponent],
    exports:[DropdownComponent]
})
export class DropdownModule{}