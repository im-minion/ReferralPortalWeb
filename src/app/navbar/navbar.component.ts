import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

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

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
  
}
