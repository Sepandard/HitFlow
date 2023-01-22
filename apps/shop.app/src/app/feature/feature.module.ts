import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature.routing.module';
import { SharedModule } from '../shared/shared.module';
import { FeatureComponent } from './feature.component';


@NgModule({
  declarations: [FeatureComponent],
  imports: [
    CommonModule,
    SharedModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
