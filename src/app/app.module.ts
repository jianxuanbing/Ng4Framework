import { DemoJsonViewModule } from './containers/demo-json-view/demo-json-view.module';
import { DemoGridModule } from './containers/demo-grid/demo-grid.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './maps/routes';
import { components } from './maps/components';
import { AppComponent } from './app.component';
import { ButtonModule } from './components/button/button.module';

/**
 * 导入模块
 */
const MODULE_IMPORTS=[
    BrowserModule,
    FormsModule,
    HttpModule,
    ButtonModule,
    DemoGridModule,
    DemoJsonViewModule,
    RouterModule.forRoot(routes,{useHash:false})
];

@NgModule({
    bootstrap:[AppComponent],
    declarations:components,
    imports:MODULE_IMPORTS
})

export class AppModule{

}