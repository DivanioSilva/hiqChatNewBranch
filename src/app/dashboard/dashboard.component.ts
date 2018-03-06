import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public auth: AuthService){

  }

  public doLogoff() {
    this.auth.logout();
  }

  public setDisplayname() {
    this.auth.userState.updateProfile(
      { displayName: "João Gomes", photoURL: "http://google.it/jgomes"}
    );
  }
}
