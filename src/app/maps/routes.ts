import { Routes, RouterModule } from '@angular/router';
import { DemoGridComponent } from '../containers/demo-grid/demo-grid.component';

/**
 * 路由配置
 */
export const routes:Routes=[
    {path:'grid',component:DemoGridComponent}
]