import { AutoSizeDirective } from './autosize.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
    ],
    declarations:[AutoSizeDirective],
    exports:[AutoSizeDirective]
})
export class AutoSizeModule{}