import { Component } from '@angular/core';
import { Navbar } from './navbar.model';
import { NAVBAR_CONFIG } from './navbar.resource';

@Component({
  selector: 'hf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  
})
export class NavbarComponent {
  public readonly configs: Navbar[] = NAVBAR_CONFIG;
} 
