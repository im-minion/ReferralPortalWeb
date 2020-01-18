import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { AuthService } from '../services/authentication/auth.service';
import { Observable } from 'rxjs';
import { async } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  employeeRole: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.employeeRole = localStorage.getItem('employeeRole');
    console.log(this.employeeRole);
  }

  valid() {
    // check if login is successful or not
    if (!isNullOrUndefined(localStorage.getItem('employeeRole')) && !isNullOrUndefined(localStorage.getItem('employeeId'))) {
      return true;
    } else {
      return false;
    }
  }

  isRole(role: string): boolean {
    return localStorage.getItem('employeeRole') === role;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  
}
