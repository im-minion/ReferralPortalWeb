import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()messageBool: boolean = false;
  @Input() messageType: string;
  @Input() message: string;

  constructor() {
  }

  ngOnInit() {
    console.log("Init1 " + this.messageBool);
    if (this.messageBool) {
      console.log("Init2 " + this.messageBool);
      setTimeout(() => {
        this.messageBool = false;
        this.message = null;
      }, 2000);
    }
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
  //   console.log("Change1 " + this.messageBool);
  //   if (this.messageBool) {
  //     console.log("Change2 " + this.messageBool);
  //     setTimeout(() => {
  //       this.messageBool = false;
  //       this.message = null;
  //     }, 2000);
  //   }
  // }
  

}
