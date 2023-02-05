import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENT } from './components';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { DIRECTIVE } from './directive';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';

const MAT_MODULES: Provider[] = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSelectModule,
  MatTabsModule,
  MatCardModule,
  MatDialogModule,
  MatMenuModule
];
@NgModule({
  declarations: [COMPONENT, DIRECTIVE],
  imports: [MAT_MODULES, CommonModule, RouterModule],
  exports: [COMPONENT, MAT_MODULES, DIRECTIVE]
})
export class SharedModule {}
