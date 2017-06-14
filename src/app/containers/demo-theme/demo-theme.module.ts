import { DemoThemeComponent } from './demo-theme.component';
import { GridModule } from './../../components/grid/grid.module';
import { PanelModule } from './../../components/panel/panel.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        PanelModule,
        GridModule
    ],
    declarations:[DemoThemeComponent]
})
export class DemoThemeModule{}