import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CreateRoomPageComponent } from './components/create-room-page/create-room-page.component';
import { JoinRoomPageComponent } from './components/join-room-page/join-room-page.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { MultiplayerMenuComponent } from './components/multiplayer-menu/multiplayer-menu.component';
import { OnePlayerMenuComponent } from './components/one-player-menu/one-player-menu.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { SnakeMultiplayerScreenComponent } from './components/snake-multiplayer-screen/snake-multiplayer-screen.component';
import { TicTacToeScreenComponent } from './components/tic-tac-toe-screen/tic-tac-toe-screen.component';
import { WaitingRoomPageComponent } from './components/waiting-room-page/waiting-room-page.component';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { 
    path: 'welcome', 
    component: WelcomeContainerComponent, 
    title: 'Welcome',
    canActivate: [AuthGuard]
  },
  {
    path: '', 
    component: MainMenuComponent, 
    title: 'Hyper Arcade', 
    canActivate: [AuthGuard]
  },
  {
    path: 'one-player', 
    component: OnePlayerMenuComponent, 
    title: 'One Player', 
    canActivate: [AuthGuard]
  },
  {
    path: 'multiplayer', 
    component: MultiplayerMenuComponent, 
    title: 'Multiplayer', 
    canActivate: [AuthGuard]
  },
  {
    path: 'settings', 
    component: SettingsPageComponent, 
    title: 'Settings', 
    canActivate: [AuthGuard]
  },
  {
    path: 'about', 
    component: AboutPageComponent, 
    title: 'About', 
    canActivate: [AuthGuard]
  },
  {
    path: 'create-room', 
    component: CreateRoomPageComponent, 
    title: 'Create Room', 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'join-room', 
    component: JoinRoomPageComponent, 
    title: 'Join Room', 
    canActivate: [AuthGuard]
  },
  {
    path: 'waiting-room', 
    component: WaitingRoomPageComponent, 
    title: 'Waiting Room', 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'snake-multiplayer', 
    component: SnakeMultiplayerScreenComponent, 
    title: 'Classic Snake Multiplayer', 
    canActivate: [AuthGuard]
  }, 
  {
    path: 'tic-tac-toe', 
    component: TicTacToeScreenComponent, 
    title: 'Tic Tac Toe', 
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
