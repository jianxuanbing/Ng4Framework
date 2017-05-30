import { BreadcrumbComponent } from './breadcrumb.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports:[CommonModule],
    declarations:[BreadcrumbComponent],
    exports:[BreadcrumbComponent]
})
export class BreadcrumbModule{}