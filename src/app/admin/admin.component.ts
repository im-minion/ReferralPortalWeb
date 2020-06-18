import { Component, OnInit, OnDestroy } from "@angular/core";
import { Employee } from "../employee";
import { AdminService } from "../services/admin-service/admin.service";
import { Subscription } from "rxjs";
import { TableDataService } from "../services/shared-service/table-data.service";
import { UserRoles } from "../app.constants";
import { FormGroup, FormControl } from "@angular/forms";
declare var $: any;

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public selectedEmployee: Employee = null;
  public isLoadingUpdate: boolean = false;
  public userRoles = [];
  public updateEmployeeForm: FormGroup;
  private displayedColumns: string[] = [
    "Employee Id",
    "Employee Role",
    "Update",
  ];
  private dataSource: Array<Employee>;
  private subscriptions$: Subscription[] = [];

  public constructor(
    private adminService: AdminService,
    private tableDataService: TableDataService
  ) {}

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
    const employeesSub$ = this.adminService.getAllEmployees().subscribe(
      (data: Array<Employee>) => {
        this.tableDataService.changeDataSource(data);
        this.tableDataService.changeDisplayedColumns(this.displayedColumns);
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

  public onClicked(event) {
    this.selectedEmployee = event;
    this.updateEmployeeForm
      .get("employeeRole")
      .setValue(this.selectedEmployee.employeeRole);
  }

  public updateEmployee(): void {
    const payload = {
      employeeId: this.selectedEmployee.employeeId,
      employeeNewRole: this.updateEmployeeForm.get("employeeRole").value,
    };
    this.isLoadingUpdate = true;
    const changeRole$ = this.adminService.changeRole(payload).subscribe(
      () => {
        this.loadEmployees();
        this.isLoadingUpdate = false;
        $("#updateModal").modal("hide");
      },
      (err) => {
        this.isLoadingUpdate = false;
        console.log(err);
      }
    );
    this.subscriptions$.push(changeRole$);
  }
}
