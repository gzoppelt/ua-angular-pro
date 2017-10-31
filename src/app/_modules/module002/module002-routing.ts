import { Routes, RouterModule } from '@angular/router';

import { Module002Component } from './components/cn_module002.component';

const routes: Routes = [
  { path: '', component: Module002Component },

];

export const Module001Routing = RouterModule.forChild(routes);
