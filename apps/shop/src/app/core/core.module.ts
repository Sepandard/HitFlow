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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    SuggestComponent,
    NavbarComponent,
    FeedbackComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage,
    MatSnackBarModule,
    TrackerComponent,
    MatBottomSheetModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [LayoutComponent],
  providers: [
    {
      provide: IS_DESKTOP,
      useFactory: isDesktop,
      deps: [DeviceDetectorService],
    },
  ],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule,
    injector: Injector
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
