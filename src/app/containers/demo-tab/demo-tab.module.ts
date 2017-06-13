import { DemoTabComponent } from './demo-tab.component';
import { TabGroupModule } from './../../components/tab/tab-group.module';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[TabGroupModule],
    declarations:[DemoTabComponent]
})
export class DemoTabModule{}