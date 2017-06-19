import { TreeModule } from './../components/tree/tree.module';
import { TooltipModule } from './../components/tooltip/tooltip.module';
import { ToastModule } from './../components/toast/toast.module';
import { SpinnerModule } from './../components/spinner/spinner.module';
import { ShrinkModule } from './../components/shrink/shrink.module';
import { SelectModule } from './../components/select/select.module';
import { RatingModule } from './../components/rating/rating.module';
import { RangeModule } from './../components/range/range.module';
import { PopoverModule } from './../components/popover/popover.module';
import { ModalModule } from './../components/modal/modal.module';
import { MaskModule } from './../components/mask/mask.module';
import { LoadingModule } from './../components/loading/loading.module';
import { ListModule } from './../components/list/list.module';
import { InputtextModule } from './../components/inputtext/inputtext.module';
import { ScrollModule } from './../components/scroll/scroll.module';
import { RippleModule } from './../components/ripple/ripple.module';
import { ProgressModule } from './../components/progress/progress.module';
import { JsonViewModule } from './../components/jsonView/jsonView.module';
import { GridModule } from './../components/grid/grid.module';
import { DropdownModule } from './../components/dropdown/dropdown.module';
import { ChipModule } from './../components/chip/chip.module';
import { CardModule } from './../components/card/card.module';
import { CalendarModule } from './../components/calendar/calendar.module';
import { HamburgeModule } from './../components/hamburge/hamburge.module';
import { ImageModule } from './../components/image/image.module';
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
        AccordionModule,

        BadgeModule,
        BreadcrumbModule,
        ButtonModule,        
        
        CalendarModule,
        CardModule,
        CheckboxModule,
        ChipModule,
        CodeModule,

        DropdownModule,

        GridModule,

        HamburgeModule,

        IconModule,
        ImageModule,
        InputtextModule,

        JsonViewModule,

        ListModule,
        LoadingModule,

        MaskModule,
        ModalModule,

        PanelModule,
        PopoverModule,
        ProgressModule,        

        RadioModule,
        RippleModule,
        RangeModule,
        RatingModule,        

        ShareModule,
        ScrollModule,
        SelectModule,
        ShrinkModule,
        SpinnerModule,
        SwitchModule,
                
        TabGroupModule,
        TableModule,
        ToastModule,
        TooltipModule,
        TreeModule
    ],
    exports:[
        AccordionModule,

        BadgeModule,
        BreadcrumbModule,
        ButtonModule,        
        
        CalendarModule,
        CardModule,
        CheckboxModule,
        ChipModule,
        CodeModule,

        DropdownModule,

        GridModule,

        HamburgeModule,

        IconModule,
        ImageModule,
        InputtextModule,

        JsonViewModule,

        ListModule,
        LoadingModule,

        MaskModule,
        ModalModule,

        PanelModule,
        PopoverModule,
        ProgressModule,        

        RadioModule,
        RippleModule,
        RangeModule,
        RatingModule,        

        ShareModule,
        ScrollModule,
        SelectModule,
        ShrinkModule,
        SpinnerModule,
        SwitchModule,
                
        TabGroupModule,
        TableModule,
        ToastModule,
        TooltipModule,
        TreeModule
    ]
})
export class BingNgModule {}