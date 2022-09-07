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
import { WaitingRoomPageComponent } from './components/waiting-room-page/waiting-room-page.component';
import { WelcomeContainerComponent } from './components/welcome-container/welcome-container.component';

const routes: Routes = [
  { 
    path: 'welcome', component: WelcomeContainerComponent, title: 'Welcome'
  },
  {
    path: '', component: MainMenuComponent, title: 'Hyper Arcade'
  },
  {
    path: 'one-player', component: OnePlayerMenuComponent, title: 'One Player'
  },
  {
    path: 'multiplayer', component: MultiplayerMenuComponent, title: 'Multiplayer'
  },
  {
    path: 'settings', component: SettingsPageComponent, title: 'Settings'
  },
  {
    path: 'about', component: AboutPageComponent, title: 'About'
  },
  {
    path: 'create-room', component: CreateRoomPageComponent, title: 'Create Room'
  }, 
  {
    path: 'join-room', component: JoinRoomPageComponent, title: 'Join Room'
  },
  {
    path: 'waiting-room', component: WaitingRoomPageComponent, title: 'Waiting Room'
  }, 
  {
    path: 'snake-multiplayer', component: SnakeMultiplayerScreenComponent, title: 'Classic Snake Multiplayer'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
