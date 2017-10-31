import { NgModule } from '@angular/core';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CdkTableModule } from '@angular/cdk/table';
import {
  MatGridListModule,
  // MatToolbarModule,
} from '@angular/material';

@NgModule({
  exports: [
    // BrowserAnimationsModule,
    // CdkTableModule,
    MatGridListModule,
    // MatToolbarModule,
  ]
})
export class Module001MaterialModule {}
