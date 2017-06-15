import { TreeComponent } from './tree.component';
import { TreeItemComponent } from './tree-item.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[TreeItemComponent,TreeComponent],
    exports:[TreeItemComponent,TreeComponent]
})
export class TreeModule{}