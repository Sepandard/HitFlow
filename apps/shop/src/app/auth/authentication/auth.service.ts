import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthApi } from '../api/auth-api.service';
import { LoginResponse, UserLogin } from '../api/auth-api.model';
import { IdentityService } from '@app/core/services/identity.service';

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

  logout() {
    this.identityService.clearToken();
  }
}
