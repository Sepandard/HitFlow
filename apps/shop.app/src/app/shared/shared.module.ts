import { NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENT } from './components';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';

const MAT_MODULES: Provider[] = [
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
];
@NgModule({
  declarations: [COMPONENT, FooterComponent],
  imports: [MAT_MODULES, CommonModule],
  exports: [COMPONENT, MAT_MODULES],
})
export class SharedModule {}
