import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { IS_DESKTOP } from '@app/core/tokens/tokens';

@Component({
  selector: 'hf-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
   constructor(
    @Inject(IS_DESKTOP) public isDesktop: boolean,
  
   ){}
} 
