import { Component } from '@angular/core';

@Component({
  selector: 'auth-message',
  template: `
    <div>
      You are logged in for {{ days }} days
    </div>
  `
})
export class AuthMessageComponent {
  days = 7;
}
