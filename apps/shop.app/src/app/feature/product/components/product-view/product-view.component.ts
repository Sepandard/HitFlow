import { Component } from '@angular/core';

@Component({
  selector: 'hit-flow-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  data = {
    description:
      'این کالا بسیار مناسب می‌باشد و جهت طولانی شدن این متن این را یادداشت میکنم',
    property: 'بسیار مناسب',
    price: '200000000',
    name: 'کتاب',
    comments: [
      {
        personName: 'کیارش حمدی ',
        commentDescription:
          'با سلام بنده از خرید این کالا بسیار راضی بوده و خرید آن را به همه کتاب خوانان توضیه میکنم زیرا کتاب به خوبی ترجمه شده و مطالب کتاب بسیار مفید است'
      },
      {
        personName: 'کیارش حمدی ',
        commentDescription:
          'با سلام بنده از خرید این کالا بسیار راضی بوده و خرید آن را به همه کتاب خوانان توضیه میکنم زیرا کتاب به خوبی ترجمه شده و مطالب کتاب بسیار مفید است'
      }
    ]
  };
}
