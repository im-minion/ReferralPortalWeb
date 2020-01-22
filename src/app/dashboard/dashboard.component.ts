import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employee: Employee;
  constructor() {
  }

  ngOnInit() {
    this.employee = new Employee('', localStorage.getItem('employeeRole'), localStorage.getItem('employeeId'));
  }

}
