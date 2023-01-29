
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { CategoryEndpoint } from '../../../category/api/category-api.endpoint';
import { Product } from '../../api/product-api.model';
import { ProductApiService } from '../../api/product-api.service';

@Component({
  selector: 'hf-admin-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent {
  form!: FormGroupType<Product>;
  private _isEditing: boolean = false;
  public fileName?: string;
  limitDiscount: any;
  categories: any[] = [
    {
      categoryId: 1,
      value: 'hello',
    },
  ];
  private _id!: number;
  public loading: boolean = false;
  constructor(
    private router: Router,
    private api: ProductApiService,
    private fb: FormBuilder,
    private notification: NotificationsService
  ) {
    this.initForm();
  }
  public get id(): number {
    return this._id;
  }

  public get isEditing(): boolean {
    return this._isEditing;
  }

  categoryEndpoint = CategoryEndpoint

  getDataById() {}

  submitForm() {
    this.loading = true;
    
    this.api
      .create(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.getDataById();
        },
        error: (error: any) => {
          this.notification.showError(error);
        },
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
      off: [null, Validators.required],
    }) as FormGroupType<any>;
  }

  getErrorMessage() {
    if (this.form.get('name').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('name').hasError('email') ? 'Not a valid email' : '';
  }

  handleCancel() {
    this.router.navigate(['../']);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      this.form.get('image').setValue(file as any);
    }
  }
}
