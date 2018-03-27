
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [ MessageComponent ],
  imports: [ BrowserModule ],
  exports: [ MessageComponent ]
})
export class ChatWidgetModule { }
