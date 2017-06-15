import { ShrinkItemComponent } from './shrink-item.component';
import { ShrinkComponent } from './shrink.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[ShrinkComponent,ShrinkItemComponent],
    exports:[ShrinkComponent,ShrinkItemComponent]
})
export class ShrinkModule{}