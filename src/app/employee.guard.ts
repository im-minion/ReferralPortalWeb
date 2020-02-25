import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/authentication/auth.service';
import { UserRoles } from './app.constants';
@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      let userRole: string;
      this.authService.userRole$.subscribe(role => {
        userRole = role;
      });
  
      if (state.url.includes('hm')) {
        return userRole === UserRoles.HM;
      } else if (state.url.includes('hr')) {
        return userRole === UserRoles.HR;
      } else if (state.url.includes('admin')) {
        return userRole === UserRoles.ADMIN;
      } else {
        return true;
      }
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
