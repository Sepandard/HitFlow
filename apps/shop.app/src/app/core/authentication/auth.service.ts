import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IdentityService } from '../service/identity.service';
import { AuthApi } from '../api/auth-api.service';
import { LoginResponse, UserCreationModel, UserLogin } from '../api/auth-api.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(
    private identityService: IdentityService,
    private authApi: AuthApi
  ) {}

  login(model: UserLogin): Observable<LoginResponse> {
    return this.authApi.login(model).pipe(
      tap((result) => {
        this.identityService.storeToken(result.token);
        return result;
      })
    );
  } 
  
  signup(model: UserCreationModel): Observable<LoginResponse> {
    return this.authApi.signup(model)
  }

  logout() {
    this.identityService.clearToken();
  }
}
