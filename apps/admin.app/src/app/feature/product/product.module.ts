import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';
import { ProductComponent } from './product.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '@shared/shared.module';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductApiService } from './api/product-api.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCreateComponent,
    ProductViewComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers:[ProductApiService]
})
export class ProductModule {}
