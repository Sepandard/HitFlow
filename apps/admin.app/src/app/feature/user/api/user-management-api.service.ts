import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserEndpoint } from './user.endpoint';
import { User } from './user.model';

@Injectable()
export class UserManagementApiService {
  constructor(private http: HttpClient) {}

  getById(id: number) {
    return this.http.get<User>(UserEndpoint.byId(id));
  }
}
