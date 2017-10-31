import { Component } from '@angular/core';

import { User } from '../_modules/auth-form/auth-form.interface';

@Component({
  selector: 'app-m002',
  templateUrl: './cn_module002.html',
  styleUrls: ['./cn_module002.css']
})
export class Module002Component {

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}