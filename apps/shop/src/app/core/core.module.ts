import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent, SuggestComponent } from './components';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IS_DESKTOP } from './tokens/tokens';
import { DeviceDetectorService } from 'ngx-device-detector';
@NgModule({
  declarations: [LayoutComponent, SuggestComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage],
  exports: [LayoutComponent],
  providers: [
    {
      provide: IS_DESKTOP,
      useValue: isDesktopFactory,
    },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    private deviceDetector: DeviceDetectorService
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded in app module. Import only in AppModule'
      );
    }
    isDesktopFactory(deviceDetector.isDesktop());
  }
}

function isDesktopFactory(value: boolean) {
  return value;
}
