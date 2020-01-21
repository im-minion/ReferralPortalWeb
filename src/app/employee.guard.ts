import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/authentication/auth.service';
@Injectable({
  providedIn: 'root'
})
export class EmployeeGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | import("rxjs").Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
