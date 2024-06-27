import { Component, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() toggleSidenav = new EventEmitter<void>();
  constructor (private title: Title) {

  }
  
  getTitle() {
    return this.title.getTitle() ?? 'Digi Package'; 
  }

}
