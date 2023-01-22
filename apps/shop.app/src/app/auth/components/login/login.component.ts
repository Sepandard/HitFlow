import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import {   LoginStatus, UserLogin } from '@core/api';
import { AuthService } from '@core/authentication';
import { FormGroupType } from '@core/interface/form-type.interface';
import { NotificationsService } from '@core/service';
import { finalize } from 'rxjs';

@Component({
  selector: 'hf-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form!: FormGroupType<UserLogin>;
  errorMessage?: string;
  private returnUrl!: string;

  public loading: boolean = false;
  constructor(
    private fb: FormBuilder,
    private api: AuthService,
    private router: Router,
    private notification: NotificationsService
  ) {
    this.initForm();
    this.returnUrl =  '/user/list';
  }

  onLogin() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.loading = true;
    this.api
      .login(this.form.value)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (result: any) => {
          switch (result.loginStatus) {
            case LoginStatus.InvalidCredential:
              this.errorMessage = 'Username or password is wrong';
              this.notification.showError(this.errorMessage);
              return;
            case LoginStatus.Success:
              this.router.navigateByUrl(this.returnUrl);
              return;
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
      password: [null, Validators.required],
    }) as FormGroupType<any>;
  }

  getErrorMessage() {
    if (this.form.get('email').hasError('required')) {
      return 'You must enter a value';
    }

    return this.form.get('email').hasError('email') ? 'Not a valid email' : '';
  }
}
