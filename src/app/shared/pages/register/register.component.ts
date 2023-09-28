import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildRegisterForm();
  }
  buildRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: new FormControl(''),
      surname: new FormControl('', []),
      email: new FormControl('', []),
      password: new FormControl('', []),
      passwordConfirm: new FormControl('', []),
    });
  }
}
