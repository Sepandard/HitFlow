import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { throwError, Observable, EMPTY } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { IdentityService } from '../service/identity.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthExpirationHttpInterceptor implements HttpInterceptor {
  constructor(
    private identityService: IdentityService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error && error.status === 401) {
          // 401 errors are most likely going to be because we have an expired token
          if (
            !this.identityService.isAuthenticated() ||
            this.identityService.isTokenExpired()
          ) {
            // There is no token, or  the token is expired, navigate to login page
            this.router.navigate(['/login'], {
              queryParams: { returnUrl: this.router.url },
            });
            return EMPTY;
          }
        }

        return throwError(error);
      })
    );
  }
}

export const AuthExpirationHttpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthExpirationHttpInterceptor,
    multi: true,
  },
];
