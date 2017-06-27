import { CountDownComponent } from './countdown.component';
import { Timer } from './countdown.timer';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [CommonModule],
    providers: [Timer],
    declarations: [CountDownComponent],
    exports: [CountDownComponent]
})
export class CountDownModule { }