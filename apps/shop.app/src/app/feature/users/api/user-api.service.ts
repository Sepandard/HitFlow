import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEndpoint } from './user-api.endpoint';
import { Comment } from './user-api.model';

@Injectable()
export class UserApiService {
  constructor(private http: HttpClient) {}

  getComment() {
    return this.http.get<Comment[]>(UserEndpoint.comment);
  }
}
