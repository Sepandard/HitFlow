import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { UserComponent } from './user.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [UserCommentsComponent, UserComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}
