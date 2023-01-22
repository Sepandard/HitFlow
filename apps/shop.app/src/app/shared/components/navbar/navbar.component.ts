import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarItem } from './navbar.interface';
import { linkNavbar } from './navbar.resourse';

@Component({
  selector: 'hit-flow-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {  
  @Input() navbarItems : NavbarItem[] = linkNavbar 
  constructor(private route : Router){
    console.log('iam here');
    
  }
  onClick(node: NavbarItem) {
    this.route.navigate([node.path]);
  }
}
