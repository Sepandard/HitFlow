import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Environment } from '@core/interface/env.interface';
import { environment } from 'src/environments/environment';
import { Sidebar } from './sidebar.interface';
import { sidebarLink } from './sidebar.resource';

@Component({
  selector: 'hf-admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  private readonly _links: Sidebar[] = sidebarLink;
  public readonly appEnvironment: Environment = environment;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public isExpanded = false;
  public isShowing = false;

  public get links(): Sidebar[] {
    return this._links;
  }

  constructor(private route : Router) {}



  onClick(node: Sidebar) {
    console.log(node.route);
    
    this.route.navigate([node.route])
  }
}
