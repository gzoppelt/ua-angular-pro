import { Component } from '@angular/core';
import {  } from '';


import { User } from '../_modules/auth-form/components/md_user';

@Component({
  selector: 'app-module',
  templateUrl: './cn_module.html',
  styleUrls: ['./cn_module.css']
})
export class ModuleComponent {

  rememberMe = false;

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user, this.rememberMe);
  }

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

}