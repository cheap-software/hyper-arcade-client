import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/services/web-socket.service';

@Component({
  selector: 'app-tic-tac-toe-screen',
  templateUrl: './tic-tac-toe-screen.component.html',
  styleUrls: ['./tic-tac-toe-screen.component.css']
})
export class TicTacToeScreenComponent implements OnInit {
  constructor(private socket:WebSocketService) { }

  ngOnInit(): void {
  }

  onSave(): void {
    this.socket.sendMessage("Hello from client");
  }
}
