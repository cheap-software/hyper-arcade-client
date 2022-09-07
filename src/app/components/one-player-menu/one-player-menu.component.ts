import { Component, OnInit } from '@angular/core';
import { GameCardComponent } from '../game-card/game-card.component';
import OnePlayerGames from '../../blob/one-player-games';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-one-player-menu',
  templateUrl: './one-player-menu.component.html',
  styleUrls: ['./one-player-menu.component.css']
})
export class OnePlayerMenuComponent implements OnInit {
  games:Game[] = OnePlayerGames;

  constructor() { }

  ngOnInit(): void {
  }

}
