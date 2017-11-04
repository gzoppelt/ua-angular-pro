import { NgModule } from '@angular/core';


import { AuthFormModule } from './_modules/auth-form/auth-form.module';

import { ModuleRouting } from './module-routing';
import { ModuleMaterialModule } from './module-material';

import { ModuleComponent } from './components/cn_module.component';
//import { AuthRememberComponent } from './_modules/auth-form/components/co_auth-remember.component';
//import { AuthMessageComponent } from './_modules/auth-form/components/co_auth-message.component';



@NgModule({
  declarations: [
    ModuleComponent,
    //AuthRememberComponent,
    //AuthMessageComponent,
  ],
  imports: [
    ModuleRouting,
    ModuleMaterialModule,
    AuthFormModule,

  ],
  bootstrap: []
})
export class ModuleModule {}
