import { BingNgModule } from './../../maps/bingNg.module';
import { DemoBadgeComponent } from './demo-badge.component';
import { IconModule } from './../../components/icon/icon.module';
import { BadgeModule } from './../../components/badge/badge.module';
import { GridModule } from './../../components/grid/grid.module';
import { TableModule } from './../../components/table/table.module';
import { CodeModule } from './../../components/code/code.module';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[
        CommonModule,        
        TabGroupModule,
        CodeModule,
        TableModule,
        GridModule,
        BadgeModule,
        IconModule
    ],
    declarations:[DemoBadgeComponent]
})
export class DemoBadgeModule{}
