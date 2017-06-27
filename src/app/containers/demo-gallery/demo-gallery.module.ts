import { GridModule } from './../../components/grid/grid.module';
import { PanelModule } from './../../components/panel/panel.module';
import { ImageModule } from './../../components/image/image.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoGalleryComponent } from './demo-gallery.component';
@NgModule({
    imports:[
        CommonModule,
        ImageModule,
        PanelModule,
        GridModule
    ],
    declarations:[DemoGalleryComponent]
})
export class DemoGalleryModule{}