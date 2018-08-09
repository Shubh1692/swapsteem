import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  
  constructor(private _socket) {
 this._socket = io('http://swapsteem-api.herokuapp.com');
}


  sendMessage(msg){
    this._socket.emit("newMessage", msg);
    console.log("Message Send")
  }

  reciveMessage(){
    let observavle = new Observable(observer => {
      this._socket.on("msg", (data) => {
        console.log("Message Recive");
        observer.next(data);
      });
      return this._socket.disconnect();
    });

    return observavle;
  }

  
}
