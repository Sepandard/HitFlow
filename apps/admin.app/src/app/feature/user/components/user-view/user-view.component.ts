import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';
import { UserManagementApiService } from '../../api/user-management-api.service';
import {
  GenderField,
  RoleField,
  StatusField,
  User,
} from '../../api/user.model';

@Component({
  selector: 'hf-admin-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.scss'],
})
export class UserViewComponent {
  form!: FormGroupType<User>;
  statusField = StatusField;
  roleField = RoleField;
  genderField = GenderField;
  private _isEditing: boolean = false;

  private _id!: number;
  public loading: boolean = false;
  public model!: User;
  constructor(
    private route: ActivatedRoute,
    private api: UserManagementApiService,
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
            this.form.patchValue(Object.assign(this.model));
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }

  submitForm(){

  }

  private initForm() {
    this.form = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required],
      genderId: [null, Validators.required],
      roleId: [null, Validators.required],
      statusId: [null, Validators.required],
      phoneNumber: [null],
      password: [null],
    }) as FormGroupType<any>;
    this.form.disable()

  }

  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }

  handleEdit(){
    this._isEditing = true
    this.getDataById()
    this.form.enable()

  } 
  handleCancel(){
    this._isEditing = false
    this.getDataById()
    this.form.disable()

  }
}
