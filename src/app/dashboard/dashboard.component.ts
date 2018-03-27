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

  public channelData: Array<{ user: string, message: string, date: Date }>;
  
  constructor(public auth: AuthService,
    public message: MessageService){
    }
  
  ngOnInit(): void {
    this.message.getChannelMessage()
      .subscribe(data => {
        this.channelData = data.sort(
          (a, b) => (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
        ).reverse();
      });   
  }

  public doLogoff() {
    this.auth.logout();
  }

  public sendMessage(messageString: {item1: string, item2: string}) {
    console.log(messageString);
    this.message.createNewMessage(messageString.item1)
      .then(
        (value) => {
          console.log(value);
        }, 
        (reason) => console.log(reason)
      );
  }

}
