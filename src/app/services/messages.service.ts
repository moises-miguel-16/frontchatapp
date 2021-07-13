import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';
const base_url = environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private ngZone: NgZone
  ) {
  }

  public getAllMessagesAfterLogin(): Observable<any>{

    const token = localStorage.getItem('token') || '';

    return this.http.get(`${ base_url }/getAllMessages`, {
      headers: {
        'x-token': token
      }
    })
  }

  //pull all messages after loggin



}
