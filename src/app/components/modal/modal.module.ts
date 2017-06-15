import { ShareModule } from './../common/share';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[ModalComponent],
    exports:[ModalComponent,ShareModule]
})
export class ModalModule{}