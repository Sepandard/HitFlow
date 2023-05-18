import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  LayoutComponent, SuggestComponent } from './components';

@NgModule({
  declarations: [LayoutComponent, SuggestComponent],
  imports: [CommonModule, RouterModule],
  exports:[LayoutComponent]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded in app module. Import only in AppModule'
      );
    }
  }
}
