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