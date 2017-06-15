import { ListComponent } from './list.component';
import { ListItemComponent } from './list-item.component';
import { ListAvatarComponent } from './list-avatar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[ListAvatarComponent,ListItemComponent,ListComponent],
    exports:[ListAvatarComponent,ListItemComponent,ListComponent]
})
export class ListModule{}