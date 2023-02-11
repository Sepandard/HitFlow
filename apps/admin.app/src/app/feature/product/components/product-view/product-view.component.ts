/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @angular-eslint/component-selector */
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { CategoryEndpoint } from '../../../category/api/category-api.endpoint';
import { Product } from '../../api/product-api.model';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hf-admin-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent {
  form!: FormGroupType<Product>;
  limitDiscount: any;
  categoryEndpoint = CategoryEndpoint;

  private _isEditing = false;

  private _id!: number;
  public loading = false;
  public model!: Product;
  constructor(
    private route: ActivatedRoute,
    private api: ProductApiService,
    private fb: FormBuilder,
    private notification: NotificationsService
  ) {
    this.initForm();
    this.route.paramMap.subscribe((params) => {
      this._id = Number(params.get('id'));
      this.getDataById();
    });
  }
  public get id(): number {
    return this._id;
  }

  public get isEditing(): boolean {
    return this._isEditing;
  }

  getDataById() {
    this.loading = true;
    if (this.id) {
      this.api
        .getById(this.id)
        .pipe(finalize(() => (this.loading = false)))
        .subscribe({
          next: (value) => {
            this.model = value;
            console.log(this.model);

            this.form.patchValue(Object.assign(this.model));
          },
          error: (error) => {
            console.error(error);
          }
        });
    }
  }

  submitForm() {
    this.loading = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.api
      .update(this.form.value, this.id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.getDataById();
          this.handleDisable();
        },
        error: (error: any) => {
          this.notification.showError(error);
        }
      });
  }

  private initForm() {
    this.form = this.fb.group({
      categoryId: [null, Validators.required],
      name: [null, Validators.required],
      image: [null, Validators.required],
      description: [null, Validators.required],
      amount: [null, Validators.required],
      cost: [null, Validators.required],
      off: [null]
    }) as FormGroupType<any>;
    this.form.disable();
  }

  getErrorMessage() {
    // return this.form.get('title').hasError('required')
    //   ? 'You must enter a value'
    //   : '';
  }

  handleEdit() {
    this._isEditing = true;
    this.getDataById();
    this.form.enable();
  }
  handleDisable() {
    this._isEditing = false;
    this.getDataById();
    this.form.disable();
  }
}
