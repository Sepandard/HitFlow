import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupType } from '@core/interface/form-type.interface';
import { User } from '@core/interface/user.interface';

@Component({
  selector: 'hf-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroupType<User>;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.form.value);
  }

  private initForm() {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
    }) as FormGroupType<User>;
  }
}
