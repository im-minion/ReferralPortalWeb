import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee-services/employee.service';
import { UserRoles } from '../app.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  employee: Employee;
  analyticalInfo: any;
  userRoleConstants = UserRoles;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employee = new Employee(sessionStorage.getItem('employeeRole'), sessionStorage.getItem('employeeId'));
    this.employeeService.getAnalyticalInfo(this.employee.employeeId, this.employee.employeeRole).subscribe(
      (resp)=> {
        console.log(resp);
        this.analyticalInfo = resp;
    },
    (err) => {

    });
  }

}
