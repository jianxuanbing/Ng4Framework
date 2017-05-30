import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
    selector:'b-header',
    template:'<ng-content></ng-content>'
})
export class HeaderComponent{}

@Component({
    selector:'b-footer',
    template:'<ng-content></ng-content>'
})
export class FooterComponent{}

@NgModule({
    imports:[CommonModule,BrowserAnimationsModule],
    declarations:[HeaderComponent,FooterComponent],
    exports:[HeaderComponent,FooterComponent]
})
export class ShareModule{}