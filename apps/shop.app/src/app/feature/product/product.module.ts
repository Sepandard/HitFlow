import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product.routing.module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductComponent } from './product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductApiService } from './api/product-api.service';
import { SharedModule } from '@shared/shared.module';
import { ProductCommentDialogComponent } from './components/product-view/product-comment-dialog/product-comment-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductComponent,
    ProductViewComponent,
    ProductListComponent,
    ProductCommentDialogComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    FormsModule
  ],
  providers: [ProductApiService]
})
export class ProductModule {}
