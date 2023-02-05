import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { Comment, CommentStatusLabel } from '../../api/comment-api.model';
import { CommentApiService } from '../../api/comment-api.service';

@Component({
  selector: 'hit-flow-comment-view',
  templateUrl: './comment-view.component.html',
  styleUrls: ['./comment-view.component.scss']
})
export class CommentViewComponent {
  public id!: number;
  public model!: Comment;
  public loading: boolean = false;
  public commentStatusLabel = CommentStatusLabel
  constructor(
    private route: ActivatedRoute,
    private api: CommentApiService,
    private notification: NotificationsService
  ) {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getDataById();
    });
  }
  
  getDataById() {
    if (!this.id) return;
    this.loading = true
    this.api.getById(this.id).pipe(finalize(()=> this.loading = false)).subscribe({
      next:(data)=>{
        this.model = data
      }
    })
  }

  reject(){
    if (!this.id) return;
    this.loading = true
    this.api.reject(this.id).pipe(finalize(()=> this.loading = false)).subscribe({
      next:(data)=>{
        this.model = data
        this.getDataById()
      }
    })
  }  

  confirmed(){
    if (!this.id) return;
    this.loading = true
    this.api.confirmed(this.id).pipe(finalize(()=> this.loading = false)).subscribe({
      next:(data)=>{
        this.model = data
        this.getDataById()
      }
    })
  }
}
