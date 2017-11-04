import { Route } from '@angular/router';

import { HomeComponent } from './_modules/home/components/cn_home.component';

export const routes: Route[] = [
  { path: '', component: HomeComponent },                                                   // instant
  { path: 'home', component: HomeComponent },
  { path: 'm001', loadChildren: './_modules/module001/module001.module#Module001Module' },  // lazy loading
  { path: 'm002', loadChildren: './_modules/module002/module002.module#Module002Module' },
  { path: 'm003', loadChildren: './_modules/module003/module.module#ModuleModule' },
  { path: 'm004', loadChildren: './_modules/module004/module.module#ModuleModule' },
  { path: 'm005', loadChildren: './_modules/module005/module.module#ModuleModule' },
  { path: 'm006', loadChildren: './_modules/module006/module.module#ModuleModule' },
  { path: 'm007', loadChildren: './_modules/module007/module.module#ModuleModule' },
  { path: 'm008', loadChildren: './_modules/module008/module.module#ModuleModule' },
  { path: 'm009', loadChildren: './_modules/module009/module.module#ModuleModule' },
  { path: 'm010', loadChildren: './_modules/module010/module.module#ModuleModule' },
  { path: 'm011', loadChildren: './_modules/module011/module.module#ModuleModule' },
  { path: 'm012', loadChildren: './_modules/module012/module.module#ModuleModule' },
  { path: 'm013', loadChildren: './_modules/module013/module.module#ModuleModule' },
  { path: 'm014', loadChildren: './_modules/module014/module.module#ModuleModule' },
  { path: 'm015', loadChildren: './_modules/module015/module.module#ModuleModule' },
  { path: 'm016', loadChildren: './_modules/module016/module.module#ModuleModule' },
  { path: 'm017', loadChildren: './_modules/module017/module.module#ModuleModule' },
  { path: 'm018', loadChildren: './_modules/module018/module.module#ModuleModule' },
  { path: 'm019', loadChildren: './_modules/module019/module.module#ModuleModule' },
  { path: 'm020', loadChildren: './_modules/module020/module.module#ModuleModule' },
  { path: 'm021', loadChildren: './_modules/module021/module.module#ModuleModule' },
  { path: 'm022', loadChildren: './_modules/module022/module.module#ModuleModule' },
  { path: 'm023', loadChildren: './_modules/module023/module.module#ModuleModule' },
  { path: 'm024', loadChildren: './_modules/module024/module.module#ModuleModule' },
  { path: 'm025', loadChildren: './_modules/module025/module.module#ModuleModule' },
];
