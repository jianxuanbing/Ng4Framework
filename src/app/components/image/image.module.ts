import { ImageGroupComponent } from './image-group.component';
import { ImageComponent } from './image.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[ImageComponent,ImageGroupComponent],
    exports:[ImageComponent,ImageGroupComponent]
})
export class ImageModule{}