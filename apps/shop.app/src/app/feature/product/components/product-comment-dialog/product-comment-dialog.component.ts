/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject, Input } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hit-flow-product-comment-dialog',
  templateUrl: './product-comment-dialog.component.html',
  styleUrls: ['./product-comment-dialog.component.scss']
})
export class ProductCommentDialogComponent {
  productId!: number;
  content!:string
  constructor(
    public dialogRef: MatDialogRef<ProductCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ProductApiService
  ) {
    this.productId = this.data.productId;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  submit() {
    if (!this.productId) return;
    this.api
      .createComment({
        content: this.content,
        productId: this.productId
      })
      .subscribe({
        next: () => {
          this.dialogRef.close(true);
        }
      });
  }
}
