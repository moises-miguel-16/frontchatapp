import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {

  constructor(
    private messagesService: MessagesService
  ) { 
    //Extraendo los mensajes
    this.getAllMessages()
    
  }

  ngOnInit(): void {
  }
  getAllMessages(): void {
    this.messagesService.getAllMessagesAfterLogin().subscribe(rpta => {
      console.log(rpta)
    })
  }

}
