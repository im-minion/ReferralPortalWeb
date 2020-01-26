import { Component, OnInit, OnChanges, Input, OnDestroy } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { Subscription } from 'rxjs';
import { UserRoles } from '../app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit, OnDestroy {
  employeeRole: string;
  employeeRoleSubscription: Subscription;
  userRoleConstants = UserRoles;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.getUserRole();
  }

  getUserRole() {
    this.employeeRoleSubscription = this.authService.userRole$.subscribe(role => {
      if(role) {
        this.employeeRole = role;
      } else {
        this.authService.setUserRoleUsingSessionStorage();
      }
    });
    console.log(this.employeeRole);
  }

  ngOnDestroy() {
    this.employeeRoleSubscription.unsubscribe();
  }

  valid() {
    // check if login is successful or not
    if (!isNullOrUndefined(sessionStorage.getItem('employeeRole')) && !isNullOrUndefined(sessionStorage.getItem('employeeId'))) {
      return true;
    } else {
      return false;
    }
  }

  isRole(role: string): boolean {
    return sessionStorage.getItem('employeeRole') === role;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('login');
  }
  
}
