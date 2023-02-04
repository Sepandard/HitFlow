/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'hit-flow-product-comment-dialog',
  templateUrl: './product-comment-dialog.component.html',
  styleUrls: ['./product-comment-dialog.component.scss']
})
export class ProductCommentDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ProductCommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
