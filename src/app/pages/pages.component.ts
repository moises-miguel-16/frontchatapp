import { Component, OnInit } from '@angular/core';
// import { MessagesService } from '../services/messages.service';

import { SettingsService } from '../services/settings.service';

declare function customInitFunctions();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor(  private settingsService: SettingsService/*,private messagesService: MessagesService */ ) { 
    // this.getAllMessages()
  }

  ngOnInit(): void {
    customInitFunctions();
  }
  /* getAllMessages(): void {
    this.messagesService.getAllMessagesAfterLogin().subscribe(rpta => {
      console.log(rpta.payload)
    })
  }
 */
}
