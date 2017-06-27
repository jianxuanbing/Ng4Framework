import { DemoTypographyComponent } from './demo-typography.component';
import { CodeModule } from './../../components/code/code.module';
import { NgModule } from '@angular/core';
import { TabGroupModule } from '../../components/tab/tab-group.module';
import { GridModule } from '../../components/grid/grid.module';
@NgModule({
    imports:[
        TabGroupModule,
        CodeModule,
        GridModule
    ],
    declarations:[DemoTypographyComponent]
})
export class DemoTypographyModule{}