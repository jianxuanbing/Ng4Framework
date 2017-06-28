import { LoadingModule } from './components/loading/loading.module';
import { AppRoutingModule } from './maps/app-routing.module';
import { ContainerModule } from './maps/container.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

/**
 * 导入模块
 */
const MODULE_IMPORTS=[
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ContainerModule,
    AppRoutingModule,
];

@NgModule({
    bootstrap:[AppComponent],
    declarations:[AppComponent],
    imports:MODULE_IMPORTS,
    providers:[
        HttpModule,
        BrowserModule
    ]
})

export class AppModule{
}