import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit } from '@angular/core';
import { AuthFormComponent } from '../_modules/auth-form/components/cn_auth-form.component';


import { User } from '../_modules/auth-form/components/md_user';

@Component({
  selector: 'app-module',
  templateUrl: './cn_module.html',
  styleUrls: ['./cn_module.css']
})
export class ModuleComponent implements AfterContentInit {

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor (private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.componentFactoryResolver.resolveComponentFactory(AuthFormComponent);
    const componentA  = this.entry.createComponent(authFormFactory);
    const componentB = this.entry.createComponent(authFormFactory);
    componentA.instance.title = 'Create Account';
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}