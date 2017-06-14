import { PanelComponent } from './panel.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[PanelComponent],
    exports:[PanelComponent]
})
export class PanelModule{}