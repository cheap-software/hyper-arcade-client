import { Component, OnInit } from '@angular/core';
import { WelcomePageComponent } from '../welcome-page/welcome-page.component';
import { LoginPageComponent } from '../login-page/login-page.component';
import { SignupPageComponent } from '../signup-page/signup-page.component';
import { AnonymousLoginPageComponent } from '../anonymous-login-page/anonymous-login-page.component';

@Component({
  selector: 'app-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrls: ['./welcome-container.component.css']
})
export class WelcomeContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
