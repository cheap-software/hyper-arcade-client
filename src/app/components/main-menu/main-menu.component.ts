import { Component, OnInit } from '@angular/core';
import { OnePlayerMenuComponent } from '../one-player-menu/one-player-menu.component';
import { MultiplayerMenuComponent } from '../multiplayer-menu/multiplayer-menu.component';
import { AccountPageComponent } from '../account-page/account-page.component';
import { SettingsPageComponent } from '../settings-page/settings-page.component';
import { AboutPageComponent } from '../about-page/about-page.component';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  quit(): void {
    localStorage.removeItem('userId');
    this.authService.removeAuthProfile();
    this.router.navigate(["/welcome"]);
  }
}
