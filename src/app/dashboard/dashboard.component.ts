import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MessageService } from '../shared/message.service';

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public channelData: Observable<any[]>;
  constructor(public auth: AuthService,
    public message: MessageService){
      
    }
  
  ngOnInit(): void {
    this.channelData = this.message.getChannelMessage();
      
  }

  public doLogoff() {
    this.auth.logout();
  }

  public setDisplayname() {
    this.auth.userState.updateProfile(
      { displayName: "João Gomes", photoURL: "http://google.it/jgomes"}
    );
  }

  public sendMessage(message: string) {
    this.message.createNewMessage(message)
      .then(
        (value) => console.log(value), 
        (reason) => console.log(reason)
      );
  }
}
