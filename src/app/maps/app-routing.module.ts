import { DemoFormComponent } from './../containers/demo-form/demo-form.component';
import { DemoDropdownComponent } from './../containers/demo-dropdown/demo-dropdown.component';
import { DemoChipComponent } from './../containers/demo-chip/demo-chip.component';
import { DemoCheckboxComponent } from './../containers/demo-checkbox/demo-checkbox.component';
import { DemoCardComponent } from './../containers/demo-card/demo-card.component';
import { DemoCalendarComponent } from './../containers/demo-calendar/demo-calendar.component';
import { DemoButtonsComponent } from './../containers/demo-buttons/demo-buttons.component';
import { DemoBreadcrumbComponent } from './../containers/demo-breadcrumb/demo-breadcrumb.component';
import { DemoBadgeComponent } from './../containers/demo-badge/demo-badge.component';
import { DemoStartComponent } from './../containers/demo-start/demo-start.component';
import { DemoAccordionComponent } from './../containers/demo-accordion/demo-accordion.component';
import { DemoThemeComponent } from './../containers/demo-theme/demo-theme.component';
import { NgModule } from '@angular/core';
import { IndexComponent } from './../containers/index/index.component';
import { MainComponent } from './../containers/main/main.component';
import { DemoTabComponent } from './../containers/demo-tab/demo-tab.component';
import { DemoJsonViewComponent } from './../containers/demo-json-view/demo-json-view.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoGridComponent } from '../containers/demo-grid/demo-grid.component';

/**
 * 子路由
 */
const childRoutes:Routes=[
    {path:'grid',component:DemoGridComponent},
    {path:'json-view',component:DemoJsonViewComponent},
    {path:'tab',component:DemoTabComponent},
    {path:'accordion',component:DemoAccordionComponent},
    {path:'theme',component:DemoThemeComponent,data:{title:'主题'}},
    {path:'getting-started',component:DemoStartComponent},
    {path:'badge',component:DemoBadgeComponent},
    {path:'breadcrumb',component:DemoBreadcrumbComponent},
    {path:'buttons',component:DemoButtonsComponent},
    {path:'calendar',component:DemoCalendarComponent},
    {path:'card',component:DemoCardComponent},
    {path:'checkbox',component:DemoCheckboxComponent},
    {path:'chip',component:DemoChipComponent},
    {path:'dropdown',component:DemoDropdownComponent},
    {path:'input',component:DemoFormComponent},
    {path:'',component:MainComponent}
]
/**
 * 常量路由
 */
const routes:Routes=[
    {path:'main',component:IndexComponent,children:childRoutes},
    {path:'',redirectTo:'/main',pathMatch:'full'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes,{useHash:false})
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}