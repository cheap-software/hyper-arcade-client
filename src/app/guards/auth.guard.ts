import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isLogged(route);
  }

  private isLogged(route:ActivatedRouteSnapshot):any {
    if (this.authService.getAuthProfile().user_id === "" && route.url.toString() !== "welcome") {
      return this.router.parseUrl('/welcome');
    } 

    if (this.authService.getAuthProfile().user_id !== "" && route.url.toString() === "welcome") {
      return this.router.parseUrl('/');
    }

    return true;
  }
}
