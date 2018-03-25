import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { MessageService } from '../shared/message.service';

import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public displayName: string = ""

  constructor(public auth: AuthService, 
    public router: Router,
    public activatedRoute: ActivatedRoute){ 
      this.activatedRoute.params
        .subscribe(value => this.displayName = value['name']);

      //this.displayName = this.activatedRoute.snapshot.params['name'];
      
    }
  
  ngOnInit(): void { }

  public saveMe() {
    this.auth.userState.updateProfile(
      { 
        displayName: this.displayName, 
        photoURL: "http://google.it/jgomes" 
      }
    ).then((value)=>{
      this.auth.displayName = this.displayName;
      this.router.navigate(['/dashboard']);
    })
  }
}
