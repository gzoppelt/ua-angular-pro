import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthFormComponent } from './components/cn_auth-form.component';
import { AuthMessageComponent } from './components/co_auth-message.component';
import { AuthRememberComponent } from './components/co_auth-remember.component';


@NgModule({
  declarations: [
    AuthFormComponent,
    AuthMessageComponent,
    AuthRememberComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AuthFormComponent,
    AuthMessageComponent,
    AuthRememberComponent,
  ]
})
export class AuthFormModule {}