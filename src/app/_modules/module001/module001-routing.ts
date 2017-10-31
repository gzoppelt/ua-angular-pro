import { Routes, RouterModule } from '@angular/router';

import { Module001Component } from './components/cn_module001.component';

const routes: Routes = [
  { path: '', component: Module001Component },

];

export const Module001Routing = RouterModule.forChild(routes);
