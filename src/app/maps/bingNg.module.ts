import { PanelModule } from './../components/panel/panel.module';
import { TabGroupModule } from './../components/tab/tab-group.module';
import { AccordionModule } from './../components/accordion/accordion.module';
import { BadgeModule } from './../components/badge/badge.module';
import { SwitchModule } from './../components/switch/switch.module';
import { IconModule } from './../components/icon/icon.module';

// Angular Lib
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Customer Component Lib
import { ButtonModule } from './../components/button/button.module';
import { RadioModule } from './../components/radio/radio.module';
import { CheckboxModule } from './../components/checkbox/checkbox.module';
import { CodeModule } from './../components/code/code.module';
import { TableModule } from './../components/table/table.module';
import { ShareModule } from '../components/common/share';
import { BreadcrumbModule } from '../components/breadcrumb/breadcrumb.module';

@NgModule({
    imports:[
        ButtonModule,
        TableModule,
        CodeModule,
        CheckboxModule,
        RadioModule,
        IconModule,
        SwitchModule,
        BadgeModule,
        ShareModule,
        AccordionModule,
        BreadcrumbModule,
        TabGroupModule,
        PanelModule
    ]
})
export class BingNgModule {}