import { Component, HostListener, Inject, OnInit, inject } from '@angular/core';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { HomeMarketMessageComponent } from './components/home-market-message/home-market-message.component';
import { TrackerComponent } from '../../../../../../libs/hit/src'
import { ActivatedRoute } from '@angular/router';
import { IS_DESKTOP } from '@app/core/tokens/tokens';
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

  private route =  inject(ActivatedRoute)
  showHeatMap: boolean;
  
  
  constructor(@Inject(IS_DESKTOP) public isDesktop: boolean){
   
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe({
      next:(param)=>{
        if(param.showHeatMap)
        this.showHeatMap = param.showHeatMap
      }
    })
  }
}
