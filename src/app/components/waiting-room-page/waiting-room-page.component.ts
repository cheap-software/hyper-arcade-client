import { Component, OnInit } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';
import { Game } from 'src/app/models/game';
import MultiplayerGames from '../../blob/multiplayer-games';

@Component({
  selector: 'app-waiting-room-page',
  templateUrl: './waiting-room-page.component.html',
  styleUrls: ['./waiting-room-page.component.css']
})
export class WaitingRoomPageComponent implements OnInit {
  games:Game[] = MultiplayerGames;
  constructor() { }

  ngOnInit(): void {
  }

}
