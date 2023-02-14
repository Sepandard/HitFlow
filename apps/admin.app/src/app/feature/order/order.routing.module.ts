import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { SearchComponent } from './components/search/search.component';
import { OrderComponent } from './order.component';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: OrderViewComponent
      },

      { path: '**', component: OrderListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule {}
