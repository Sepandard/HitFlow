import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductApiService } from './api/product-api.service';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductComponent,
    ProductViewComponent,
    ProductListComponent,
  ],
  imports: [CommonModule, ProductRoutingModule,SharedModule],
  providers:[ProductApiService]
})
export class ProductModule {}
