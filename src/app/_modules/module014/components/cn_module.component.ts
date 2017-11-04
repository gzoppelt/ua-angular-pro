import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterContentInit, ComponentRef } from '@angular/core';
import { AuthFormComponent } from '../_modules/auth-form/components/cn_auth-form.component';


import { User } from '../_modules/auth-form/components/md_user';

@Component({
  selector: 'app-module',
  templateUrl: './cn_module.html',
  styleUrls: ['./cn_module.css']
})
export class ModuleComponent implements AfterContentInit {

  show = true;

  componentA: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor (private componentFactoryResolver: ComponentFactoryResolver) {}

  ngAfterContentInit() {
    const authFormFactory = this.componentFactoryResolver.resolveComponentFactory(AuthFormComponent);
    this.componentA  = this.entry.createComponent(authFormFactory);
    this.componentA.instance.title = 'Create Account';
    this.componentA.instance.submitted.subscribe(this.loginUser);
    const componentB = this.entry.createComponent(authFormFactory);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

  destroyComponent() {
    if (this.componentA) {
      this.componentA.destroy();
      this.show = false;
    }
  }

}