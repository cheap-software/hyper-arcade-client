import { Injectable, EventEmitter, Output } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';

const ENDPOINT: string = "http://localhost:3000"

interface EventHandler {
  eventName:string, 
  callback:(params:any)=>void
}

@Injectable()
export class WebsocketService extends Socket {
  @Output() outEven: EventEmitter<any> = new EventEmitter();
  constructor(private cookieService: CookieService) {
    super({
      url: ENDPOINT,
      options: {
        query: {
          payload: cookieService.get('user')
        }
      }
    });
  }

  setEmmiters = (events:EventHandler[]) =>{
    events.forEach(eventHandler => {
      this.ioSocket.on(eventHandler.eventName, eventHandler.callback);    
    });
  }
}