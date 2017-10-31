import { Routes, RouterModule } from '@angular/router';

import { ModuleComponent } from './components/cn_module.component';

const routes: Routes = [
  { path: '', component: ModuleComponent },

];

export const ModuleRouting = RouterModule.forChild(routes);
