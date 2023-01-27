import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  LoginResponse,
  UserCreationModel,
  UserCredentialModel,
  UserLogin,
} from './auth-api.model';
import { Observable } from 'rxjs';
import { AuthEndpoint } from './auth-api.endpoint';

@Injectable()
export class AuthApi {
  constructor(private http: HttpClient) {}

  public login(model: UserLogin): Observable<LoginResponse> {
    const { email, password } = model;
    return this.http.post<LoginResponse>(AuthEndpoint.login, <
      UserCredentialModel
    >{
      email: email,
      password: password,
    });
  }

  public signup(model: UserCreationModel): Observable<LoginResponse> {
    const { email, password,genderId,name ,phoneNumber} = model;
    return this.http.post<LoginResponse>(AuthEndpoint.signup, <
      UserCreationModel
    >{
      email: email,
      password: password,
      genderId:genderId,
      name:name,
      phoneNumber:phoneNumber,
    });
  }

  public currentUser() {
    return this.http.get(AuthEndpoint.login);
  }
}
