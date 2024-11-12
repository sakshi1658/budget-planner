import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatSnackBarModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  activeForm: 'login' | 'register' = 'login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  toggleForm() {
    this.activeForm = this.activeForm === 'login' ? 'register' : 'login';
  }

  login() {
    if (this.loginForm.valid) {
      // Perform login action
    } else {
      this.snackBar.open('Please enter valid login credentials', 'Close', { duration: 3000 });
    }
  }

  register() {
    if (this.registerForm.valid) {
      // Perform registration action
    } else {
      this.snackBar.open('Please enter valid registration details', 'Close', { duration: 3000 });
    }
  }
}
