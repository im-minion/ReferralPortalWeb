import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee: Employee;
  constructor() {
  }

  ngOnInit() {
    this.employee = new Employee(sessionStorage.getItem('employeeRole'), sessionStorage.getItem('employeeId'));
  }

}
