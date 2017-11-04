import {
  Component, Output, EventEmitter,
  ContentChildren, AfterContentInit, QueryList,
  ViewChildren, AfterViewInit, ChangeDetectorRef,
  ViewChild, ElementRef,
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
        <input type="email" name="email" ngModel #email>
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
      <auth-message [style.display]="(showMessage ? 'inherit' : 'none')"></auth-message>
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
        .email {
            border-color: red;
        }
  `]
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {

  showMessage = false;

  @Output() submitted: EventEmitter<User> = new EventEmitter<User>();

  @ContentChildren(AuthRememberComponent) remember: QueryList<AuthRememberComponent>;

  @ViewChildren(AuthMessageComponent) messages: QueryList<AuthMessageComponent>;

  @ViewChild('email') email: ElementRef;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterContentInit() {
    // if (this.messages) { this.messages.forEach( msg => msg.days = 15 ); }
    if (this.remember) {
      this.remember.forEach( item => {
        item.checked.subscribe( checked => this.showMessage = checked );
      });
    }
  }

  ngAfterViewInit() {

    this.email.nativeElement.setAttribute('placeholder', 'Enter email address');
    this.email.nativeElement.classList.add('email');
    this.email.nativeElement.focus();

    // ViewChildren only accessible here !!
     if (this.messages) {
       // setTimeout( () => this.messages.forEach( msg => msg.days = 15 ) );
       this.messages.forEach( msg => msg.days = 15 );
       this.changeDetectorRef.detectChanges();
     }
  }

  onSubmit(value: User) {
    this.submitted.emit(value);
  }


}
