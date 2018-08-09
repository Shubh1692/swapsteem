import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {



  constructor( private _chatService: ChatService,
                private _messages ) { 
  }

  ngOnInit() {
    this._chatService.reciveMessage().subscribe(data => {
      this._messages.push(data);
    }); 
  }

  sendMessage(msg){
    this._chatService.sendMessage(msg);
  }
}
