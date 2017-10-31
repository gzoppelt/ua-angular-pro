import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/cn_home.component';
import { AppMaterialModule } from 'app/app-material';


@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
