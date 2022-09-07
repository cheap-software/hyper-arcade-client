import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() name:string = "";
  @Input() subtitle:string = "";
  @Input() imgref:string = "";
  @Input() description:string = "";
  @Input() players:string = ""; 

  constructor() {
  }

  ngOnInit(): void {
  }

}
