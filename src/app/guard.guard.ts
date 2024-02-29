import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginUrlService } from './login-url.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(
    private router: Router,
    private slogin: AuthService,
    private previousUrlService: LoginUrlService
  ) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLoggedIn = this.slogin.isLoggedIn();
    if (isLoggedIn) {
      return true;
    }

    const targetUrl = state.url;
    if (targetUrl !== '/login') {
      this.previousUrlService.setPreviousUrl(targetUrl);
    }
    this.router.navigate(['/login']);
    return false;
  }
}
