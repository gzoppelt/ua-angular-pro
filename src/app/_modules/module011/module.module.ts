import { NgModule } from '@angular/core';


import { AuthFormModule } from './_modules/auth-form/auth-form.module';

import { ModuleRouting } from './module-routing';
import { ModuleMaterialModule } from './module-material';

import { ModuleComponent } from './components/cn_module.component';
import { AuthFormComponent } from './_modules/auth-form/components/cn_auth-form.component';


@NgModule({
  declarations: [
    ModuleComponent,
  ],
  imports: [
    ModuleRouting,
    ModuleMaterialModule,
    AuthFormModule,

  ],
  entryComponents: [
    AuthFormComponent,
  ],
  bootstrap: []
})
export class ModuleModule {}
