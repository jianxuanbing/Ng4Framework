import { PaginationItemComponent } from './pagination-item.component';
import { PaginationComponent } from './pagination.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[PaginationComponent,PaginationItemComponent],
    exports:[PaginationComponent,PaginationItemComponent]
})
export class PaginationModule{}