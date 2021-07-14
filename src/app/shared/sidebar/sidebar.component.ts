import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public messages: any[];


  constructor( private messagesService: MessagesService ) {
    this.getAllMessages()
  }

  ngOnInit(): void {
  }
  getAllMessages(): void {
    this.messagesService.getAllMessagesAfterLogin().
    subscribe(rpta => {
      console.log(rpta.payload)
      this.messages = rpta.payload;
      this.messages.forEach((msg:any)=>{
        if(msg.uid == Number(localStorage.getItem('iduser'))){
          msg.you = true;
        }
      })
    })
  }

}
