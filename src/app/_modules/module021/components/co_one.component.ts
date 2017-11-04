import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-one',
  template: `
    <div>
      <small>
        <code>ChangeDetectionStrategy.OnPush</code>
        <p>should not update single properties</p>
      </small>
      <h4>{{user.name}}</h4>
      <h5>{{user.age}} years old</h5>
      {{user.location}}<br>
      {{user.email}}<br>
      <br>
      <button (click)="update()">Internal update</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OneComponent {
  @Input() user;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
