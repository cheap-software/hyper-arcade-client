import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { SignupPageComponent } from './components/signup-page/signup-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { OnePlayerMenuComponent } from './components/one-player-menu/one-player-menu.component';
import { MultiplayerMenuComponent } from './components/multiplayer-menu/multiplayer-menu.component';
import { JoinRoomPageComponent } from './components/join-room-page/join-room-page.component';
import { WaitingRoomPageComponent } from './components/waiting-room-page/waiting-room-page.component';
import { CreateRoomPageComponent } from './components/create-room-page/create-room-page.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';
import { AnonymousLoginPageComponent } from './components/anonymous-login-page/anonymous-login-page.component';
import { AccountPageComponent } from './components/account-page/account-page.component';
import { GameCardComponent } from './components/game-card/game-card.component';
import { InputImgPreviewComponent } from './components/input-img-preview/input-img-preview.component';
import { SnakeMultiplayerScreenComponent } from './components/snake-multiplayer-screen/snake-multiplayer-screen.component';
import { TicTacToeScreenComponent } from './components/tic-tac-toe-screen/tic-tac-toe-screen.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

const config:SocketIoConfig = { url:'http://localhost:3000', options: {} } 

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    MainMenuComponent,
    OnePlayerMenuComponent,
    MultiplayerMenuComponent,
    JoinRoomPageComponent,
    WaitingRoomPageComponent,
    CreateRoomPageComponent,
    SettingsPageComponent,
    AboutPageComponent,
    WelcomeContainerComponent,
    AnonymousLoginPageComponent,
    AccountPageComponent,
    GameCardComponent,
    InputImgPreviewComponent,
    SnakeMultiplayerScreenComponent,
    TicTacToeScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
