import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
  /**
   *
   */
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    var url = state.url;
    var userLog = localStorage.getItem('user');

    if (url === '/login' || url === '') {
      if (userLog !== null) {
        this._router.navigateByUrl('admin');
        return false;
      } else {
        return true;
      }
    } else {
      if (userLog != null) {
        return true;
      } else {
        this._router.navigateByUrl('/login');
        return false;
      }
    }
  }
}
