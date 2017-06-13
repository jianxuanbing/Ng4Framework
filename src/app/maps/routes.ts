import { DemoTabComponent } from './../containers/demo-tab/demo-tab.component';
import { DemoJsonViewComponent } from './../containers/demo-json-view/demo-json-view.component';
import { Routes, RouterModule } from '@angular/router';
import { DemoGridComponent } from '../containers/demo-grid/demo-grid.component';

/**
 * 路由配置
 */
export const routes:Routes=[
    {path:'grid',component:DemoGridComponent},
    {path:'json-view',component:DemoJsonViewComponent},
    {path:'tab',component:DemoTabComponent}
]