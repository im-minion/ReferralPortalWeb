import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { AdminService } from '../services/admin-service/admin.service';
import { Subscription } from 'rxjs';
import { COLUMNS, UserRoles } from '../app.constants';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public selectedEmployee: Employee = null;
  public isLoadingUpdate: boolean = false;
  public userRoles = [];
  public isDataAvailable: boolean = false;
  public updateEmployeeForm: FormGroup;
  public displayedColumns: string[] = [
    COLUMNS.EMPLOYEE_ID, COLUMNS.EMPLOYEE_ROLE
  ];
  public data: Array<Employee> = [];
  public isEmployeeModalOpen: boolean = false;
  private subscriptions$: Subscription[] = [];

  public constructor(
    private adminService: AdminService
  ) { }

  ngOnInit() {
    this.userRoles = [
      UserRoles.ADMIN,
      UserRoles.EMPLOYEE,
      UserRoles.HM,
      UserRoles.HR,
    ];
    this.updateEmployeeForm = new FormGroup({
      employeeRole: new FormControl(null),
    });
    this.loadEmployees();
  }

  private loadEmployees(): void {
    this.isLoading = true;
    const employeesSub$ = this.adminService.getAllEmployees().subscribe(
      (resp: Array<Employee>) => {
        this.data = resp;
        this.isLoading = false;
      },
      (err) => {
        console.log(err);
      }
    );
    this.subscriptions$.push(employeesSub$);
  }

  public ngOnDestroy(): void {
    this.subscriptions$.map((sub) => sub && sub.unsubscribe());
  }

  public onClicked(data: any): void {
    this.selectedEmployee = data;
  }

  public updateEmployee(): void {
    const payload = {
      employeeId: this.selectedEmployee.employeeId,
      employeeNewRole: this.updateEmployeeForm.get('employeeRole').value,
    };
    this.isLoadingUpdate = true;
    this.isLoading = true;
    const changeRole$ = this.adminService.changeRole(payload).subscribe(
      () => {
        this.loadEmployees();
        this.isLoadingUpdate = false;
        this.isEmployeeModalOpen = false;
      },
      (err) => {
        this.isLoadingUpdate = false;
        console.log(err);
      }
    );
    this.subscriptions$.push(changeRole$);
  }

  public openUpdateEmployeeModal(): void {
    this.isEmployeeModalOpen = true;
    this.updateEmployeeForm
      .get('employeeRole')
      .setValue(this.selectedEmployee.employeeRole);
  }

  public onRefreshed(data): void {
    if (data) {
      this.loadEmployees();
    }
  }
}
