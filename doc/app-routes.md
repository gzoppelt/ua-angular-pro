[Home](../README.md) > [Tests](./tests.md)
##### app-routing.ts

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
    
    ];