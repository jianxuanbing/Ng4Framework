import { TabGroupComponent } from './tab-group.component';
import { TabComponent } from './tab.component';
import { TabNavComponent } from './tab-nav.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[TabNavComponent,TabComponent,TabGroupComponent],
    exports:[TabNavComponent,TabComponent,TabGroupComponent]
})
export class TabGroupModule{}