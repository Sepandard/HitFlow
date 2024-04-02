import { Component, Inject, OnInit } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { IS_DESKTOP } from '@app/core/tokens/tokens';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeMarketMessageComponent } from './components/home-market-message/home-market-message.component';
import { TrackerComponent } from '../../../../../../libs/hit/src'
@Component({
  standalone: true,
  selector: 'hf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    NgClass,
    NgOptimizedImage,
    HomeSearchComponent,
    HomeMarketMessageComponent, 
    TrackerComponent
  ],
})
export class HomeComponent implements OnInit {
  constructor(@Inject(IS_DESKTOP) public isDesktop: boolean) {
    console.log(IS_DESKTOP);
  }
  ngOnInit(): void {}
}
