import { Component } from '@angular/core';

import { User } from '../_modules/auth-form/auth-form.interface';

@Component({
  selector: 'app-m001',
  templateUrl: './cn_module001.html',
  styleUrls: ['./cn_module001.css']
})
export class Module001Component {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}