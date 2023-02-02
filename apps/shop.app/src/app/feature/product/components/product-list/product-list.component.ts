import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { Product } from '../../api/product-api.model';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hit-flow-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  public loading: boolean = false;
  public data: Product[] = [];
  constructor(private api: ProductApiService) {
    this.getData()
  }

  getData(){
    this.loading = true;
    this.api
      .getAll()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (result) => {
          this.data = result;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
