import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment.routing.module';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';
import { SharedModule } from '@shared/shared.module';
import { CommentComponent } from './comment.component';
import { CommentApiService } from './api/comment-api.service';

@NgModule({
  declarations: [
    CommentListComponent,
    CommentViewComponent,
    CommentComponent
  ],
  imports: [
    CommonModule,
    CommentRoutingModule,
    SharedModule
  ],
  providers:[CommentApiService]
})
export class CommentModule {}
