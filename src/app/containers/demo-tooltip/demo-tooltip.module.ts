import { TableModule } from './../../components/table/table.module';
import { GridModule } from './../../components/grid/grid.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
import { CodeModule } from '../../components/code/code.module';
import { TooltipModule } from '../../components/tooltip/tooltip.module';
import { DemoTooltipComponent } from './demo-tooltip.component';
@NgModule({
    imports:[
        TabGroupModule,
        CodeModule,
        GridModule,
        TooltipModule,
        TableModule
    ],
    declarations:[DemoTooltipComponent]
})
export class DemoTooltipModule{}