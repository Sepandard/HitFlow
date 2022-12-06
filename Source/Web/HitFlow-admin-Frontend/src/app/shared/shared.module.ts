import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { COMPONENTS } from './components';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';

const MAT_MODULES: Provider[] = [
  MatCardModule,
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
];
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    MAT_MODULES,
    CommonModule,
    HttpClientModule,
    AgGridModule,
  ],
  exports: [COMPONENTS],
})
export class SharedModule {}
