import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order.routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderViewComponent } from './components/order-view/order-view.component';
import { OrderApiService } from './api/order-api.service';
import { OrderItemListComponent } from './components/order-item-list/order-item-list.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    OrderViewComponent,
    OrderItemListComponent,
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [OrderApiService],
})
export class OrderModule {}
