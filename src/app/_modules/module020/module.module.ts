import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRouting } from './module-routing';
import { ModuleMaterialModule } from './module-material';

import { ModuleComponent } from './components/cn_module.component';
import { OneComponent } from './components/co_one.component';
import { TwoComponent } from './components/co_two.component';
import { ThreeComponent } from './components/co_three.component';
import { FourComponent } from './components/co_four.component';



@NgModule({
  declarations: [
    ModuleComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
  ],
  imports: [
    CommonModule,
    ModuleRouting,
    ModuleMaterialModule,
  ],
  bootstrap: []
})
export class ModuleModule {}
