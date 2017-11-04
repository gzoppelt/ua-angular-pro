import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRouting } from './module-routing';
import { ModuleMaterialModule } from './module-material';

import { ModuleComponent } from './components/cn_module.component';
import { CreditCardDirective } from './components/di_credit-card.directive';


@NgModule({
  declarations: [
    ModuleComponent,
    CreditCardDirective,
  ],
  imports: [
    CommonModule,
    ModuleRouting,
    ModuleMaterialModule,
  ],
  bootstrap: []
})
export class ModuleModule {}
