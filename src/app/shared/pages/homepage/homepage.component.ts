import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  message: string = '';
  username: string = '';
  messageHistory: any = [];
  constructor(private socket: Socket) {}

  ngOnInit() {
    // socket => server
    this.socket.on('messageSent', (message: string, sender: string) => {
      //
      this.messageHistory.push({ message, sender });
    });
  }

  sendMessage() {
    this.socket.emit('sendMessage', this.message, this.username);
    this.messageHistory.push({ message: this.message, sender: 'Siz' });
  }
}
