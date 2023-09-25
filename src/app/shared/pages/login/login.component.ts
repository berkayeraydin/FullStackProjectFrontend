import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  // reactive forms
  // değişkenler-ctor-metotlar
  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }
  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rememberMe: new FormControl(false, []),
    });

  }
  submitForm() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) {
      console.log('Login Formu Hatalı iken gönderilmeye çalışıldı.');
      return;
    }
    console.log(this.loginForm.value);
  }
}