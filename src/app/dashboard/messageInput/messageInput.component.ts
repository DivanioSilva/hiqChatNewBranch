import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: '[message-input]',
  templateUrl: './messageInput.component.html',
  styleUrls: ['./messageInput.component.css']
})
export class MessageInputComponent {

  @ViewChild('input1') inputEl:ElementRef;

  ngAfterViewInit() {
    this.inputEl.nativeElement.focus();
}

  constructor(public message: MessageService) { }

  public messageString: string;

  ngOnInit(): void { }

  public sendMessage() {
    this.message.createNewMessage(this.messageString)
      .then(
        (value) => {
          console.log(value);
          this.messageString = "";
        }, 
        (reason) => console.log(reason)
      );
  }

}
