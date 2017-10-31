import { Component, Output, EventEmitter, ContentChildren, QueryList,  AfterContentInit } from '@angular/core';
import { AuthRememberComponent } from '../../components/co_auth-remember.component';

import { User } from './auth-form.interface';

@Component({
  selector: 'auth-form',
  template: `
    <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
      <ng-content select="h3"></ng-content>
      <label>
        Email address
        <input type="email" name="email" ngModel>
      </label>
      <br><br>
      <label>
        Password
        <input type="password" name="password" ngModel>
      </label>
      <br><br>
      <ng-content select="auth-remember"></ng-content>
      <br>
      <div *ngIf="showMessage">
        <br>You are logged in for 30 days
      </div>
      <br>
      <ng-content select="button"></ng-content>
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
export class AuthFormComponent implements AfterContentInit {

  showMessage = false;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  ngAfterContentInit() {
    if (this.remember) {
      this.remember.forEach( item => {
        item.checked.subscribe( checked => this.showMessage = checked );
      });
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }


}
