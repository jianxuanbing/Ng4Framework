import { DemoSwitchComponent } from './demo-switch.component';
import { GridModule } from './../../components/grid/grid.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupModule } from '../../components/tab/tab-group.module';
import { SwitchModule } from '../../components/switch/switch.module';
@NgModule({
    imports:[
        CommonModule,
        TabGroupModule,
        CodeModule,
        TableModule,
        SwitchModule,
        GridModule,
    ],
    declarations:[DemoSwitchComponent]
})
export class DemoSwitchModule{}