import { SelectItemComponent } from './select-item.component';
import { SelectComponent } from './select.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[SelectComponent,SelectItemComponent],
    exports:[SelectComponent,SelectItemComponent]
})
export class SelectModule{}