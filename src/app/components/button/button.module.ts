import { ButtonGroupComponent } from './buttonGroup.component';
import { BlockDirective } from './block.directive';
import { ButtonDirective } from './button.directive';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports:[CommonModule],
    declarations:[ButtonDirective,BlockDirective,ButtonGroupComponent],
    exports:[ButtonDirective,BlockDirective,ButtonGroupComponent]
})
export class ButtonModule {}