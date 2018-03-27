import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';


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

  constructor() { }

  @Output() messageChanged = new EventEmitter<{item1: string, item2: string}>();
  public messageString: string;

  ngOnInit(): void { }

  public sendMessage() {
    this.messageString = "";
    this.messageChanged.emit({item1: this.messageString, item2: "" });
  }

}
