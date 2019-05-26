import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  valid() {
    // check if login is successful or not
    if (!isNullOrUndefined(localStorage.getItem('id'))) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
  }
  
}
