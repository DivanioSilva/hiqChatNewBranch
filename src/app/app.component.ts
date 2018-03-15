import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public input1: string;

  constructor(public auth: AuthService){
    this.input1 = "Olá mundo"; 
  }



}
