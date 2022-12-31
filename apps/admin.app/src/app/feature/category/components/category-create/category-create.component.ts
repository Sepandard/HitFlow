import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { Category } from '../../api/category-api.model';
import { CategoryApiService } from '../../api/category-api.service';

@Component({
  selector: 'hit-flow-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.scss'],
})
export class CategoryCreateComponent {
  form!: FormGroupType<Category>;
  private _isEditing: boolean = false;
  public fileName?: string;

  private _id!: number;
  public loading: boolean = false;
  constructor(

    private route: ActivatedRoute,
    private router: Router,
    private api: CategoryApiService,
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

  submitForm() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.loading = true;
    this.api
      .create(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.notification.showError(error);
        },
      });
  }

  private initForm() {
    this.form = this.fb.group({
      title: [null, Validators.required],
    }) as FormGroupType<any>;
  }

  getErrorMessage() {
    if (this.form.get('title').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('title').hasError('title') ? 'Not valid' : '';
  }

  handleCancel() {
    this.router.navigate(['../']);
  }
}
