import { Component } from '@angular/core';
import { AuthService } from '../../services/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {


  username = '';
  password = '';
  loginFailed = false;

  constructor(private authService: AuthService) {}

  onLogin() {
    const success = this.authService.login(this.username, this.password);
    if(!success) {
      this.loginFailed = true;
    } else {
      this.loginFailed = false;
      alert('Login successful!');
    }
  }
}