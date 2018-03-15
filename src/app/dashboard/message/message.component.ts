import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: '[message]',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor() { }

  @Input() name: string;
  @Input() message: string;
  @Input() date: string;
  @Input() odd: boolean;
  
  ngOnInit(): void { }
}
