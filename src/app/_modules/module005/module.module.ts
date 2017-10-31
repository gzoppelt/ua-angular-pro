import { NgModule } from '@angular/core';


import { AuthFormModule } from './_modules/auth-form/auth-form.module';

import { ModuleRouting } from './module-routing';
import { ModuleMaterialModule } from './module-material';

import { ModuleComponent } from './components/cn_module.component';
import { AuthRememberComponent } from './components/co_auth-remember.component';


@NgModule({
  declarations: [
    ModuleComponent,
    AuthRememberComponent,
  ],
  imports: [
    ModuleRouting,
    ModuleMaterialModule,
    AuthFormModule,

  ],
  bootstrap: []
})
export class ModuleModule {}
