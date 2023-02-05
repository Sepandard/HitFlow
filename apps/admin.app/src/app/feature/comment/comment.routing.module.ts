import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentViewComponent } from './components/comment-view/comment-view.component';

const routes: Routes = [
  {
    path: '',
    component: CommentComponent,
    children: [
      {
        path: ':id',
        component: CommentViewComponent,
      },
      { path: '**', component: CommentListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
