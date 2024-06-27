import { NgModule, Optional, SkipSelf } from '@angular/core';
import { LayoutComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [SharedModule, NgFor, NgIf, NgClass, AsyncPipe, RouterModule],
  exports: [],
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
