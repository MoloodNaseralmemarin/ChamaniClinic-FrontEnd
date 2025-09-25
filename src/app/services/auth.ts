import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLoggedIn = false;

  constructor() { }

  login(username: string, password: string): boolean {

    if(username === 'admin' && password === '1234') {
      this.isLoggedIn = true;
      return true;
    }
    this.isLoggedIn = false;
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  getLoginStatus(): boolean {
    return this.isLoggedIn;
  }
}
