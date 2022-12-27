import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from '@core/authentication';
import { Environment } from '@core/interface/env.interface';
import { ApplicationService } from '@core/service/application.service';
import { Sidebar } from './sidebar.interface';
import { sidebarLink } from './sidebar.resource';

@Component({
  selector: 'hf-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private readonly _links: Sidebar[] = sidebarLink;
  public readonly applicationName!: string;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isExpanded = false;
  public isShowing = false;

  public get links(): Sidebar[] {
    return this._links;
  }

  constructor(
    private route: Router,
    private applicationService: ApplicationService,
    private auth: AuthService
  ) {
    this.applicationName = applicationService.applicationName;
  }

  onClick(node: Sidebar) {
    console.log(node.route);

    this.route.navigate([node.route]);
  }

  handleLogout() {
    this.auth.logout();
  }
}
