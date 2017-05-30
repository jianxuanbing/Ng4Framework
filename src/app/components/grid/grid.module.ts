import { GridDirective } from './grid.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports:[CommonModule],
    declarations:[GridDirective],
    exports:[GridDirective]
})
export class GridModule{}