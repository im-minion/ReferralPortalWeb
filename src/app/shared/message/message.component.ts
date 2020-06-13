import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ResponseTypes } from '../../app.constants';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() messageBool: boolean = false;
  @Input() messageType: string;
  @Input() message: string;
  public responses = ResponseTypes;
  constructor() {
  }

  ngOnInit() {
    this.responses = ResponseTypes;
    if (this.messageBool) {
      setTimeout(() => {
        this.messageBool = false;
        this.message = null;
      }, 3000);
    }
  }
}
