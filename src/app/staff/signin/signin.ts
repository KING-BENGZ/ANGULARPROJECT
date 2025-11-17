import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin implements OnInit {
  constructor(private fb: FormBuilder) {}
  
  signinForm!: FormGroup;
  hidePassword: boolean = true;

  companyName: string = 'EnterNow Inc.';
  showName: boolean = true;
  userCase: string = 'Staff';

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.signinForm = this.fb.group({
      staffId: ['exampleStaffId', [Validators.required]],
      password: ['examplePassword', [Validators.required, Validators.minLength(8)]],
    });
  }

  submitForm() {
    if (this.signinForm.valid) {
      console.log(this.signinForm.value);
      // Add your sign-in logic here
    }
  }
}
