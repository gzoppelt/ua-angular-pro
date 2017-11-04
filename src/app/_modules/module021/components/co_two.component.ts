import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'example-two',
  template: `
    <div>
      <small>
        <code>ChangeDetectionStrategy.Default</code>
        <p>should also update single properties</p>
      </small>
      <h4>{{user.name}}</h4>
      <h5>{{user.age}} years old</h5>
      {{user.location}}<br>
      {{user.email}}<br>
      <br>
      <button (click)="update()">Internal update</button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TwoComponent {
  @Input() user;

  update() {
    this.user.name = 'Matt Skiba';
  }
}
