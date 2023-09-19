import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  passwordChangeForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', Validators.required),
  });

  validationPassword(): boolean {
    return this.newPasswordControl.value == this.passwordConfirmControl.value;
  }

  get newPasswordControl(): FormControl {
    return this.passwordChangeForm.get('newPassword') as FormControl;
  }

  get passwordConfirmControl(): FormControl {
    return this.passwordChangeForm.get('passwordConfirm') as FormControl;
  }
}
