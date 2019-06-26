import { Component, OnInit } from '@angular/core';
import { BadWordService } from '../bad-word.service';
import { ChatService } from '../chat.service';
import { WebsocketService } from '../websocket.service';


@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
  providers: [ChatService, WebsocketService]

})
export class ChatRoomComponent implements OnInit {

  message: String;
  msgs: Array<String>;

  constructor(private badWordService: BadWordService, private chat: ChatService) {
    this.msgs = new Array<String>(0);
  }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      this.msgs.push(msg.text.replace('"', "").replace('"', ""));
    })
  }

  sendMessage(msg) {
    this.chat.sendMsg(this.badWordService.replaceWord(msg));
    this.message = "";
  }

  onKey(event: any) {
    if (event.keyCode == 13) {
      this.sendMessage(event.target.value);
    }
  }

}
