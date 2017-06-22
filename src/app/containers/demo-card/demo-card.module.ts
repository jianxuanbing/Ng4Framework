import { DemoCardComponent } from './demo-card.component';
import { GridModule } from './../../components/grid/grid.module';
import { ImageModule } from './../../components/image/image.module';
import { CardModule } from './../../components/card/card.module';
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
        CardModule,
        ImageModule,
        GridModule
    ],
    declarations:[DemoCardComponent]
})
export class DemoCardModule{}