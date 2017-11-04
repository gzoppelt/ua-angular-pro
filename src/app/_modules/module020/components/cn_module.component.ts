import { Component } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './cn_module.html',
  styleUrls: ['./cn_module.css']
})
export class ModuleComponent {
  ctx = {
    $implicit: 'Todd Motto',
    location: 'England, UK'
  };
}
