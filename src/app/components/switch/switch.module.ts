import { SwitchComponent } from './switch.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[SwitchComponent],
    exports:[SwitchComponent]
})
export class SwitchModule{}