import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { Comment, CommentStatusLabel } from '../../api/user-api.model';
import { UserApiService } from '../../api/user-api.service';

@Component({
  selector: 'hit-flow-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss']
})
export class UserCommentsComponent {
  model: Comment[] = [];
  loading: boolean = false;
  commentStatusLabel = CommentStatusLabel
  constructor(private api: UserApiService) {
    this.api
      .getComment()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (res) => {
          this.model = res;
        }
      });
  }
}
