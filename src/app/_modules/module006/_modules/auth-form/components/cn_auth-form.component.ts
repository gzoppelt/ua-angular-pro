import {
  Component, Output, EventEmitter,
  ContentChildren, AfterContentInit, QueryList,
  ViewChild,  AfterViewInit,
} from '@angular/core';
import { AuthRememberComponent } from './co_auth-remember.component';
import { AuthMessageComponent } from './co_auth-message.component';

import { User } from './md_user';

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
      <!--
      <div *ngIf="showMessage">
        <br>You are logged in for 30 days
      </div>
      -->
      <auth-message
        [style.display]="(showMessage ? 'inherit' : 'none')"
      ></auth-message>
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
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage = false;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @ViewChild(AuthMessageComponent) message: AuthMessageComponent;

  ngAfterContentInit() {
    if (this.message) {
      this.message.days = 15;
    }
    if (this.remember) {
      this.remember.forEach( item => {
        item.checked.subscribe( checked => this.showMessage = checked );
      });
    }
  }

  ngAfterViewInit() {
    if (this.message) {
      // belongs into ngAfterContentInit as Angular does not allow content change after view is initialized
      // this.message.days = 15;
    }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }


}
