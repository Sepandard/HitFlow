import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  GenderField,
  LoginStatus,
  SignupStatus,
  UserCreationModel,
} from '@core/api';
import { AuthService } from '@core/authentication';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';

@Component({
  selector: 'hit-flow-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form!: FormGroupType<UserCreationModel>;
  errorMessage?: string;
  private returnUrl!: string;
  public genderField = GenderField;
  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private api: AuthService,
    private router: Router,
    private notification: NotificationsService
  ) {
    this.initForm();
    this.returnUrl = '/';
  }

  onLogin() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.loading = true;
    this.api
      .signup(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (result: any) => {
          switch (result.SignupStatus) {
            case SignupStatus.UserExist:
              this.errorMessage = 'User Already Exist';
              this.notification.showError(this.errorMessage);
              break;
            case SignupStatus.Success:
              this.router.navigateByUrl(this.returnUrl);
              break;
          }
        },
        error: (error) => {
          console.error(error);
        },
      });
  }


  private initForm() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      password: [null, Validators.required],
      name: [null, Validators.required],
      genderId: [null, Validators.required],
    }) as FormGroupType<any>;
  }

  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'لطفا این فیلد را خالی نگذارید';
    }
    console.log(this.form.get('email').hasError('email'));
    
    return this.form.get('email').hasError('email') ? 'ایمیل صحیح نمی‌باشد' : '';
  }
}
