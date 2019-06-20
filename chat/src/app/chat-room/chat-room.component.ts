import { Component, OnInit } from '@angular/core';
import { BadWordService } from '../bad-word.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  constructor(private badWordService: BadWordService) { }

  ngOnInit() {
    this.replaceWord();
  }

  replaceWord() {
    var input = document.getElementById("input");
    this.badWordService.replaceWord(input.value);
  }

}
