import { ToastComponent } from './toast.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[ToastComponent],
    exports:[ToastComponent]
})
export class ToastModule{}