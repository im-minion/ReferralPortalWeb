import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../services/employee-services/employee.service';
import { Referral } from '../utilities/referrals-class';
import { TableDataService } from '../services/shared-service/table-data.service';
import { COLUMNS } from '../app.constants';
@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  public displayedColumns: string[] = [COLUMNS.REFERRAL_NAME, COLUMNS.JOB_ID, COLUMNS.CURRENT_LEVEL, COLUMNS.CURRENT_STATUS, COLUMNS.PROGRESS];
  public data: Array<Referral> = [];
  public selectedReferral: Referral;
  public isDetailsModalOpen: boolean = false;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.employeeService
      .getReferralsByEmployeeId(sessionStorage.getItem("employeeId"))
      .subscribe((response: Array<Referral>) => {
        this.data = response;
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
  }

  onClicked(data: any) {
    this.selectedReferral = data;
  }

  public onRefreshed(data): void {
    if(data) {
      this.loadData();
    }
  }
  public openDetailsModal(): void {
    this.isDetailsModalOpen = true;
  }

  public closeDetailsModal(data): void {
    this.isDetailsModalOpen = false;
  }

}
