import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './component/cart-list/cart-list.component';
import { DeliveredItemsComponent } from './component/delivered-items/delivered-items.component';

const routes: Routes = [
  {
    path: '',
    component: CartListComponent
  },
  {
    path: 'delivered',
    component: DeliveredItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
