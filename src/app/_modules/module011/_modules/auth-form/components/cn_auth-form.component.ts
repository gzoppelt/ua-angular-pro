import { Component, Output, EventEmitter } from '@angular/core';

import { User } from './md_user';

@Component({
  selector: 'auth-form',
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <h3>{{ title }}</h3>
      <label>
        Email address
        <input type="email" name="email" ngModel #email id="email-id">
      </label>
      <br><br>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <br><br>
      <br>
      <button type="submit">{{ title }}</button>
    </form>
  `,
  styles: [`
      form {
          float: left;
          width: 200px;
          border: 1px solid blue;
          padding: 20px;
          margin: 20px;
          background-color: azure;
      }
  `]
})
export class AuthFormComponent {

  title = 'Login';

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  onSubmit(value: User) {
    this.submitted.emit(value);
  }


}
