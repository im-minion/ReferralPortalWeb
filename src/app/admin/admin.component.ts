import { Component, OnInit, OnDestroy } from '@angular/core';
import { Employee } from '../employee';
import { AdminService } from '../services/admin-service/admin.service';
import { Subscription } from 'rxjs';
import { TableDataService } from '../services/shared-service/table-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  private displayedColumns: string[] = ['Employee Id', 'Employee Role', 'Update'];
  private dataSource: Array<Employee>;
  private subscriptions$: Subscription[] = []

  public constructor(private adminService: AdminService,
    private tableDataService: TableDataService) { }

  ngOnInit() {
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
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  public onClicked(event) {
    console.log(event)
  }

}
