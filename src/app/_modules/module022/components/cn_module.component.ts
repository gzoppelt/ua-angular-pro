import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './cn_module.html',
  styleUrls: ['./cn_module.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModuleComponent {
  user: any = {
    name: 'Mark Hoppus',
    age: 44,
    location: 'California'
  };

  addProp() {
    this.user.email = 'blink@blink-182.net';
  }
  changeName() {
    this.user.name = 'Travis Barker';
  }
  changeUser() {
    this.user = {
      name: 'Tom Delonge',
      age: 17,
      location: 'New York'
    };
  }
  reset() {
    this.user = {
      name: 'Mark Hoppus',
      age: 44,
      location: 'California'
    };
  }
}
