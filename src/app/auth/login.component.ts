import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(public auth: AuthService) { }

  public email: string;
  public password: string;

  doLogin(){
    this.auth.login({
      email: this.email, 
      password: this.password 
    });
  }

  doSignUp() {
    this.auth.createUser({
      email: this.email, 
      password: this.password 
    });
  }

}
