import { NgModule } from '@angular/core';


import { AuthFormModule } from './_modules/auth-form/auth-form.module';

import { Module001Component } from './components/cn_module001.component';
import { Module001Routing } from './module001-routing';
import { Module001MaterialModule } from './module001-material';

@NgModule({
  declarations: [
    Module001Component
  ],
  imports: [
    Module001Routing,
    Module001MaterialModule,
    AuthFormModule,
  ],
  bootstrap: []
})
export class Module001Module {}
