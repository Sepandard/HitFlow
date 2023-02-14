import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { SharedModule } from '@shared/shared.module';
import { DeliveredItemsComponent } from './component/delivered-items/delivered-items.component';
import { CartService } from './api/cart.service';

@NgModule({
  declarations: [
    CartListComponent,
    DeliveredItemsComponent
  ],
  imports: [CommonModule, CartRoutingModule, SharedModule],
  providers:[CartService]
})
export class CartModule {}
