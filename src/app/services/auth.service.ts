import { Injectable } from '@angular/core';
import { AuthProfile } from '../models/auth-profile';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private profile:AuthProfile = { user_id: "" }
  constructor() { }

  setAuthProfile(_profile:AuthProfile):void {
    this.profile = _profile;
    localStorage.setItem('userId', _profile.user_id);
  }

  getAuthProfile():AuthProfile {
    return this.profile;
  }

  removeAuthProfile():void {
    this.profile = { user_id: "" };
  }
}
