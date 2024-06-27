import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class IdentityService {
  constructor(private jwtHelper: JwtHelperService) {}

  public storeToken(token: string) {
    localStorage.setItem('token', token);

    // Tip: to increase performance and reduce the need to decode token every time,
    // we can decode the token while storing and store decoded values separately
  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }



  private getDecodedToken(): any {
    const token = this.getToken();

    if (!token) {
      return undefined;
    }

    return this.jwtHelper.decodeToken(token);
  }

  private getClaimArray(claim: string): string[] {
    const decodedToken = this.getDecodedToken();

    if (!decodedToken || !decodedToken[claim]) {
      return [];
    }

    if (Array.isArray(decodedToken[claim])) {
      return decodedToken[claim];
    } else {
      return new Array(decodedToken[claim]);
    }
  }

  private getClaim(claim: string): string {
    const decodedToken = this.getDecodedToken();

    return decodedToken[claim];
  }

  public clearToken() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
  }

  public isAuthenticated() {
    return !!this.getToken();
  }

  public isTokenExpired(): boolean {
    const token = this.getToken();
    if (!token) {
      return true;
    }

    return this.jwtHelper.isTokenExpired(token);
  }
}
