/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductCommentDialogComponent } from './product-comment-dialog/product-comment-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
     let comment;
    const dialogRef = this.dialog.open(
      ProductCommentDialogComponent,
      {
        height: '250px',
        width: '600px'
      }
    );

    dialogRef.afterClosed().subscribe((result) => {
      comment = result;
    });
  }
}
