import { DemoIconModule } from './../containers/demo-icon/demo-icon.module';
import { DemoChartsEChartsModule } from './../containers/demo-echarts/demo-charts-echarts.module';
import { DemoToastModule } from './../containers/demo-toast/demo-toast.module';
import { DemoTypographyModule } from './../containers/demo-typography/demo-typography.module';
import { DemoHighlightJsModule } from './../containers/demo-highlight-js/demo-highlight-js.module';
import { DemoCountDownModule } from './../containers/demo-countdown/demo-countdown.module';
import { DemoUEditorModule } from './../containers/demo-ueditor/demo-ueditor.module';
import { UEditorModule } from './../components/ueditor/ueditor.module';
import { DemoFormModule } from './../containers/demo-form/demo-form.module';
import { DemoDropdownModule } from './../containers/demo-dropdown/demo-dropdown.module';
import { DemoChipModule } from './../containers/demo-chip/demo-chip.module';
import { DemoCheckboxModule } from './../containers/demo-checkbox/demo-checkbox.module';
import { DemoCardModule } from './../containers/demo-card/demo-card.module';
import { DemoCalendarModule } from './../containers/demo-calendar/demo-calendar.module';
import { DemoButtonsModule } from './../containers/demo-buttons/demo-buttons.module';
import { DemoBreadcrumbModule } from './../containers/demo-breadcrumb/demo-breadcrumb.modult';
import { DemoBadgeModule } from './../containers/demo-badge/demo-badge.module';
import { BingNgModule } from './bingNg.module';
import { DemoStartModule } from './../containers/demo-start/demo-start.module';
import { DemoAccordionModule } from './../containers/demo-accordion/demo-accordion.module';
import { DemoThemeModule } from './../containers/demo-theme/demo-theme.module';
import { DemoTabModule } from './../containers/demo-tab/demo-tab.module';
import { DemoJsonViewModule } from './../containers/demo-json-view/demo-json-view.module';
import { DemoGridModule } from './../containers/demo-grid/demo-grid.module';
import { MainModule } from './../containers/main/main.module';
import { IndexModule } from './../containers/index/index.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DemoGalleryModule } from '../containers/demo-gallery/demo-gallery.module';
import { DemoTreeModule } from '../containers/demo-tree/demo-tree.module';
import { DemoTooltipModule } from '../containers/demo-tooltip/demo-tooltip.module';
import { DemoTableModule } from '../containers/demo-table/demo-table.module';
import { DemoSwitchModule } from '../containers/demo-switch/demo-switch.module';
import { DemoSpinnerModule } from '../containers/demo-spinner/demo-spinner.module';
import { DemoShrinkModule } from '../containers/demo-shrink/demo-shrink.module';
@NgModule({
    declarations:[        
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,

        IndexModule,
        MainModule,        
        DemoGridModule,
        DemoJsonViewModule,
        DemoTabModule,
        DemoThemeModule,
        DemoAccordionModule,
        DemoStartModule,
        DemoBadgeModule,
        DemoBreadcrumbModule,
        DemoButtonsModule,
        DemoCalendarModule,
        DemoCardModule,
        DemoCheckboxModule,
        DemoChipModule,
        DemoDropdownModule,
        DemoFormModule,
        DemoUEditorModule,
        DemoCountDownModule,
        DemoHighlightJsModule,
        DemoGalleryModule,
        DemoTypographyModule,
        DemoTreeModule,
        DemoTooltipModule,
        DemoToastModule,
        DemoTableModule,
        DemoSwitchModule,
        DemoSpinnerModule,
        DemoShrinkModule,
        DemoChartsEChartsModule,
        DemoIconModule,
    ],
    providers:[
    ],
})
export class ContainerModule{}