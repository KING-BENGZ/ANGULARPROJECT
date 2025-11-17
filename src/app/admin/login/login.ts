import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  staffId: string = '';
  password: string = '';
  hidePassword: boolean = true;

  constructor(private router: Router) {}

  onSubmit() {
    // Add your authentication logic here
    if (this.staffId && this.password) {
      console.log('Login attempt:', { staffId: this.staffId });
      // Navigate to admin dashboard after successful login
      this.router.navigate(['/admin/home/admin-dashboard']);
    }
  }
}
