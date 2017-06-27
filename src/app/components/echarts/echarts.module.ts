import { EChartsComponent } from './echarts.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[EChartsComponent],
    exports:[EChartsComponent]    
})
export class ECahrtsModule{}