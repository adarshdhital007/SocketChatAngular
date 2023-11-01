import { Component } from '@angular/core';
import { SocketService } from './socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  usernameInput = '';
  username = '';
  message = '';
  messages: any[] = [];
  hasUsername = false;
  userCount = 0;
  usernameSet = true;

  constructor(private socketService: SocketService) {
    this.socketService.onMessage((message: any) => {
      this.messages.push(message);
    });

    this.socketService.onUpdateMessages((updatedMessages: any[]) => {
      this.messages = updatedMessages;
    });

    // Listen for user count updates from the server
    this.socketService.socket.on('updateUserCount', (count: number) => {
      this.userCount = count;
    });

    this.socketService.socket.on('usernameSet', (result: boolean) => {
      this.usernameSet = result;

      // Check if the username is set and unique, then show the chatbox
      if (result) {
        this.hasUsername = true;
      }
    });
  }

  setUsername() {
    if (this.usernameInput) {
      this.socketService.setUsername(this.usernameInput);
    }
  }

  sendMessage() {
    if (this.message.trim() !== '') {
      this.socketService.sendMessage(this.message);
      this.message = '';
    }
  }

  deleteMessage(messageId: string, userId: string) {
    const deletedMessage = this.messages.find(
      (message) => message.id === messageId && message.userId === userId
    );

    if (this.isMessageEditable(deletedMessage)) {
      this.socketService.deleteMessage(
        deletedMessage.id,
        deletedMessage.userId
      );
    }
  }

  isMessageEditable(message: any) {
    return message.userId === this.socketService.socket.id;
  }

  isMessageFromCurrentUser(message: any): boolean {
    return message.userId === this.socketService.socket.id;
  }
}
