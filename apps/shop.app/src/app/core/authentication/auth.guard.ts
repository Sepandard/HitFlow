import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { IdentityService } from '../service/identity.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public identityService: IdentityService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const roles = route.data['roles'] as Array<string>;

    if (
      this.identityService.isAuthenticated() &&
      !this.identityService.isTokenExpired()
    ) {
      if (this.identityService.hasAnyRole(roles)) {
        return true;
      }

      // If user has not any of the specified role navigate to homepage
      this.router.navigate(['/']);

      return false;
    }

    // If user is not authenticated at all we will navigate to login page
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }
}
