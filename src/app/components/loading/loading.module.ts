import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[LoadingComponent],
    exports:[LoadingComponent]
})
export class LoadingModule{}