import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommentsEndpoint } from './comment-api.endpoint';
import { Comment } from './comment-api.model';

@Injectable()
export class CommentApiService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get<Comment>(
      CommentsEndpoint.byId(id)
    );
  }

  reject(id: number) {
    return this.http.post<Comment>(
      CommentsEndpoint.reject(id),null
    );
  }

  confirmed(id: number) {
    return this.http.post<Comment>(
      CommentsEndpoint.confirmed(id),
      null
    );
  }
}
