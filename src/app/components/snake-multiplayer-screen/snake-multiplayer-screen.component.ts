import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-snake-multiplayer-screen',
  templateUrl: './snake-multiplayer-screen.component.html',
  styleUrls: ['./snake-multiplayer-screen.component.css']
})
export class SnakeMultiplayerScreenComponent implements AfterViewInit {
  BG_COLOUR: string = '#231f20';
  SNAKE_COLOUR: string = '#c2c2c2';
  FOOD_COLOUR: string = '#e66916';

  gameScreen:any = null;
  initialScreen:any = null;
  newGameBtn:any = null;
  joinGameBtn:any = null;
  gameCodeInput:any = null;
  gameCodeDisplay:any = null;

  canvas:any;
  ctx:any;
  playerNumber:any;
  gameActive:boolean = false;

  constructor(protected websocket: WebsocketService, private cookieService: CookieService) {
    websocket.outEven.subscribe(res => {})
    websocket.setEmmiters(
      [
        { eventName:'init', callback: this.handleInit },
        { eventName:'gameState', callback: this.handleGameState },
        { eventName:'gameOver', callback: this.handleGameOver },
        { eventName:'gameCode', callback: this.handleGameCode },
        { eventName:'unknownCode', callback: this.handleUnknownCode },
        { eventName:'tooManyPlayers', callback: this.handleTooManyPlayers }
      ]
    )
  }

  ngAfterViewInit(): void {
    this.gameScreen = document.getElementById('gameScreen');
    this.initialScreen = document.getElementById('initialScreen');
    this.newGameBtn = document.getElementById('newGameButton');
    this.joinGameBtn = document.getElementById('joinGameButton');
    this.gameCodeInput = document.getElementById('gameCodeInput');
    this.gameCodeDisplay = document.getElementById('gameCodeDisplay');

    this.newGameBtn.addEventListener('click', this.newGame);
    this.joinGameBtn.addEventListener('click', this.joinGame);
  }

  newGame() {
    console.log(this.websocket);
    console.log(this.newGameBtn);

    this.websocket.emit('newGame');
    this.init();
  }

  joinGame() {
    const code = this.gameCodeInput.value;
    this.websocket.emit('joinGame', code);
    this.init();
  }

  init() {
    this.initialScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    this.canvas.width = this.canvas.height = 600;

    this.ctx.fillStyle = this.BG_COLOUR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    document.addEventListener('keydown', this.keydown);
    this.gameActive = true;
  }

  keydown(e: any) {
    this.websocket.emit('keydown', e.keyCode);
  }

  paintGame(state: any) {
    this.ctx.fillStyle = this.BG_COLOUR;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const food = state.food;
    const gridsize = state.gridsize;
    const size = this.canvas.width / gridsize;

    this.ctx.fillStyle = this.FOOD_COLOUR;
    this.ctx.fillRect(food.x * size, food.y * size, size, size);

    this.paintPlayer(state.players[0], size, this.SNAKE_COLOUR);
    this.paintPlayer(state.players[1], size, 'red');
  }

  paintPlayer(playerState: any, size: number, colour: any) {
    const snake = playerState.snake;

    this.ctx.fillStyle = colour;
    for (let cell of snake) {
      this.ctx.fillRect(cell.x * size, cell.y * size, size, size);
    }
  }

  handleInit(number:any) {
    this.playerNumber = number;
  }

  handleGameState(gameState: any) {
    if (!this.gameActive) {
      return;
    }
    gameState = JSON.parse(gameState);
    requestAnimationFrame(() => this.paintGame(gameState));
  }

  handleGameOver(data:any) {
    if (!this.gameActive) {
      return;
    }
    data = JSON.parse(data);

    this.gameActive = false;

    if (data.winner === this.playerNumber) {
      alert('You Win!');
    } else {
      alert('You Lose :(');
    }
  }

  handleGameCode(gameCode:any) {
    this.gameCodeDisplay.innerText = gameCode;
  }

  handleUnknownCode(params:any) {
    this.reset();
    alert('Unknown Game Code')
  }

  handleTooManyPlayers(params:any) {
    this.reset();
    alert('This game is already in progress');
  }

  reset() {
    this.playerNumber = null;
    this.gameCodeInput.value = '';
    this.initialScreen.style.display = "block";
    this.gameScreen.style.display = "none";
  }
}
