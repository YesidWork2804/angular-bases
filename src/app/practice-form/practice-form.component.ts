import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice-form',
  templateUrl: './practice-form.component.html',
  styleUrls: ['./practice-form.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PracticeFormComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get emailControl(): FormControl {
    return this.loginForm.get('email') as FormControl;
  }

  get passwordControl(): FormControl {
    return this.loginForm.get('password') as FormControl;
  }

  model: string = 'Aqui';
  signIn(): void {
    const credentials = this.loginForm.value;
    console.log(credentials);
    // console.log(this.loginForm.value);
  }
}

export interface LoginCredentials {
  email: string;
  password: string;
}
