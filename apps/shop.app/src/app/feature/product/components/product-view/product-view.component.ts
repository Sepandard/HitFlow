import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { Product } from '../../api/product-api.model';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hit-flow-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  data: Product = {
    amount: 100,
    categoryId: 1,
    categoryTitle: 'کتاب',
    cost: 1200,
    description:
      'با سلام بنده از خرید این کالا بسیار راضی بوده و خرید آن را به همه کتاب خوانان توضیه میکنم زیرا کتاب به خوبی ترجمه شده و مطالب کتاب بسیار مفید است',
    id:1,
    image:'../../../../../assets/photo/about/bookImage.jpg',
    name:'کتاب سیرک شبانه',
    comment: []
  };
  private _id!: number;
  public get id(): number {
    return this._id;
  }

  loading: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private api: ProductApiService
  ) {
    this.route.paramMap.subscribe((params) => {
      this._id = Number(params.get('id'));
      // this.getData();
    });
  }

  getData() {
    if (!this.id) return;
    this.loading = true;
    this.api
      .getById(this.id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe({
        next: (data) => {
          this.data = data;
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
