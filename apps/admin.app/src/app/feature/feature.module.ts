import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature.routing.module';
import { FeatureComponent } from './feature.component';
import { SharedModule } from '@shared/shared.module';
import { UserManagementApiService } from './user/api/user-management-api.service';


@NgModule({
  declarations: [FeatureComponent],
  imports: [CommonModule, FeatureRoutingModule, SharedModule],
  providers: [UserManagementApiService],
})
export class FeatureModule {}
