import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication';
import { IdentityService } from '@core/service/identity.service';
import { NavbarItem } from './navbar.interface';
import { linkNavbar } from './navbar.resourse';

@Component({
  selector: 'hit-flow-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  username :string = '';

  @Input() navbarItems: NavbarItem[] = linkNavbar;
  constructor(
    private route: Router,
    private auth: AuthService,
    private identityService: IdentityService
  ) {
    this.username = this.identityService.getName()    
  }
  onClick(node: NavbarItem) {
    this.route.navigate([node.path]);
  }

  onLogoutClicked() {
    this.username = ''
    this.auth.logout();
  }
}
