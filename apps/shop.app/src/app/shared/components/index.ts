import { Provider } from '@angular/core';
import { CardSkeletonComponent } from '@shared/components/card-skeleton/card-skeleton.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpecialOfferComponent } from './special-offer/special-offer.component';

export const COMPONENT: Provider[] = [
  NavbarComponent,
  FooterComponent,
  CardSkeletonComponent,
  SpecialOfferComponent,
];
