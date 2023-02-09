import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ClaimTypes } from '../models/claim-types';

@Injectable({ providedIn: 'root' })
export class IdentityService {
  constructor(private jwtHelper: JwtHelperService) {}

  public storeToken(token: string) {
    localStorage.setItem('token', token);

    // Tip: to increase performance and reduce the need to decode token every time,
    // we can decode the token while storing and store decoded values separately
  }  
  
  public storeName(name: string) {
    localStorage.setItem('name', name);

    // Tip: to increase performance and reduce the need to decode token every time,
    // we can decode the token while storing and store decoded values separately
  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }  

  public getName(): string {
    return localStorage.getItem('name') ?? '';
  }

  public hasRole(role: string): boolean {
    return this.getRoles().some((r) => r === role);
  }

  public hasAnyRole(roles: string[]): boolean {
    // if no role provided we will assume the condition as satisfied
    if (!roles || roles.length === 0) {
      return true;
    }

    return this.getRoles().some((r1) => roles.some((r2) => r2 === r1));
  }

  public getUserId(): string {
    return this.getClaim(ClaimTypes.Identifier);
  }

  public getDisplayName(): string {
    return this.getClaim(ClaimTypes.DisplayName);
  }

  public getUserName(): string {
    return this.getClaim(ClaimTypes.Name);
  }

  public getRoles(): string[] {
    return this.getClaimArray(ClaimTypes.Role).filter((r) => !r.includes('/'));
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
  
  public clearName() {
    // remove user from local storage to log user out
    localStorage.removeItem('name');
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
