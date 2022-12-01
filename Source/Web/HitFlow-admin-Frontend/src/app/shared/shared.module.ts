import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { COMPONENTS } from './components';

const MAT_MODULES: Provider[] = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [MAT_MODULES, CommonModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
