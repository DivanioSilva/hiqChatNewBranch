
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { MessageComponent } from './message/message.component';
import { MessageInputComponent } from './messageInput/messageInput.component';


@NgModule({
  declarations: [ MessageComponent, MessageInputComponent ],
  imports: [ BrowserModule, FormsModule ],
  exports: [ MessageComponent, MessageInputComponent ]
})
export class ChatWidgetModule { }
