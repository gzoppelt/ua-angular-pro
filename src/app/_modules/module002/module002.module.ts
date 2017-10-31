import { NgModule } from '@angular/core';


import { AuthFormModule } from './_modules/auth-form/auth-form.module';

import { Module002Component } from './components/cn_module002.component';
import { Module001Routing } from './module002-routing';
import { Module002MaterialModule } from './module002-material';

@NgModule({
  declarations: [
    Module002Component
  ],
  imports: [
    Module001Routing,
    Module002MaterialModule,
    AuthFormModule,
  ],
  bootstrap: []
})
export class Module002Module {}
