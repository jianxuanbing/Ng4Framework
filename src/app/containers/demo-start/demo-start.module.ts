import { DemoStartComponent } from './demo-start.component';
import { TreeModule } from './../../components/tree/tree.module';
import { CodeModule } from './../../components/code/code.module';
import { GridModule } from './../../components/grid/grid.module';
import { PanelModule } from './../../components/panel/panel.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,
        PanelModule,
        GridModule,
        CodeModule,
        TreeModule
    ],
    declarations:[DemoStartComponent]
})
export class DemoStartModule{}