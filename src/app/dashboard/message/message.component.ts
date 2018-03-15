import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../shared/auth.service';

@Component({
  selector: '[message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor( private auth: AuthService) { }

  @Input() name: string;
  @Input() message: string;
  @Input() date: string;
  
  public realname: string = this.auth.userState.displayName;
  
  ngOnInit(): void { 
    
  }
}
