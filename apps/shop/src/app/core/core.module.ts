import { Injector, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent, SuggestComponent } from './components';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IS_DESKTOP } from './tokens/tokens';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppInjectorsService } from './services/app-injector.service';
import { TrackerComponent } from '../../../../../libs/hit/src';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [LayoutComponent, SuggestComponent, NavbarComponent],
  imports: [CommonModule, RouterModule, NgOptimizedImage,   MatSnackBarModule,TrackerComponent],
  exports: [LayoutComponent],
  providers: [
    {
      provide: IS_DESKTOP,
      useFactory: isDesktop,
      deps:[DeviceDetectorService]
    },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    injector:Injector
  ) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded in app module. Import only in AppModule'
      );
    }
    AppInjectorsService.setInjector(injector);
  }
}


export function isDesktop(deviceDetectService: DeviceDetectorService) {
  return deviceDetectService.isDesktop();
}