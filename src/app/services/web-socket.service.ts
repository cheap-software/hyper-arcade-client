import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Socket } from 'ngx-socket-io';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  constructor(private socket:Socket, private authService:AuthService, private router:Router) { 
    socket.on('response', (response:any) => {
    })

    socket.on('credentials', (userId:string) => {
      this.authService.setAuthProfile({user_id: userId})
      this.router.navigate([''])
    })

    socket.on('username-available', (signupObj:any) => {
      this.socket.emit('signup', signupObj);
    })

    socket.on('username-in-use', (signupObj:any) => {
      alert("Username is already in use!");
    })

    socket.on('username-dont-exists', () => {
      alert("Username dont exists!");
    })

    socket.on('invalid-password', () => {
      alert("Invalid password. Try again");
    })
  }

  sendMessage(msg: string): void {
    this.socket.emit('message', msg);
  }

  signUpRequest(signupObj:any):void {
    this.checkUsername(signupObj);
  }

  checkUsername(signupObj:any):void {
    this.socket.emit('check-username', JSON.stringify(signupObj))
  }

  loginRequest(loginObj:any):void {
    this.socket.emit('login', JSON.stringify(loginObj));
  }
}
