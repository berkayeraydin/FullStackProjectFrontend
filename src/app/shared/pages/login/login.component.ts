import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SharedState } from '../../store/shared.reducers';
import { login } from '../../store/auth/auth.actions';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // reactive forms
  // değişkenler-ctor-metotlar
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private store: Store<SharedState>
  ) {}

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
      return;
    }
    localStorage.setItem('token', 'Etiya');
    this.store.dispatch(
      login({
        firstName: 'Etiya',
        lastName: 'Akademi',
        username: 'etiyaakademi',
      })
    );
    this.router.navigateByUrl('/');
  }
}
