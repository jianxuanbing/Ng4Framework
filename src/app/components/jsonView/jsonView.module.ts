import { JsonViewComponent } from './jsonView.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[JsonViewComponent],
    exports:[JsonViewComponent]
})
export class JsonViewModule{}