import { Component, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee-services/employee.service';
import { UserRoles } from '../app.constants';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  public employee: Employee;
  public analyticalInfo: any;
  private subscriptions$: Subscription[] = [];
  public userRoleConstants = UserRoles;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employee = new Employee(sessionStorage.getItem('employeeRole'), sessionStorage.getItem('employeeId'));
    const empAnalyticalSub$ = this.employeeService.getAnalyticalInfo(this.employee.employeeId, this.employee.employeeRole).subscribe(
      (resp) => {
        this.analyticalInfo = resp;
      },
      (err) => {

      });
    this.subscriptions$.push(empAnalyticalSub$);
  }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

}
