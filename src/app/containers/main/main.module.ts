import { MainComponent } from './main.component';
import { ShareModule } from './../../components/common/share';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccordionModule } from '../../components/accordion/accordion.module';
import { GridModule } from '../../components/grid/grid.module';
@NgModule({
    imports:[
        CommonModule,
        ShareModule,
        AccordionModule,
        GridModule        
    ],
    declarations:[MainComponent]
})
export class MainModule{}