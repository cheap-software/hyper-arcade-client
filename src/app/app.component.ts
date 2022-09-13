import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  
  constructor(private authService:AuthService) {
    this.getData()
  }

  getData() {
    var userId = localStorage.getItem('userId');
    if (userId !== null){
      this.authService.setAuthProfile({ user_id: userId });
    }
  }
}
