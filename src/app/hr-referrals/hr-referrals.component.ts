import { Component, OnDestroy, OnInit } from '@angular/core';
import { HrService } from '../services/hr-service/hr.service';
import { TableDataService } from '../services/shared-service/table-data.service';
import { Subscription } from 'rxjs';
import { Referral } from '../utilities/referrals-class';
import { COLUMNS } from '../app.constants';
declare var $: any;
@Component({
  selector: 'app-hr-referrals',
  templateUrl: './hr-referrals.component.html',
  styleUrls: ['./hr-referrals.component.scss']
})
export class HrReferralsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  private subscriptions$: Subscription[] = [];
  public displayedColumns: string[] = [COLUMNS.JOB_ID, COLUMNS.REFERRAL_NAME, COLUMNS.RESUME, COLUMNS.CURRENT_LEVEL, COLUMNS.CURRENT_STATUS];
  public data: Array<Referral> = [];
  public selectedReferral: Referral = null;
  public isDetailsModalOpen: boolean = false;
  public isUpdateModalOpen: boolean = false;

  constructor(private hrService: HrService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  private loadData(): void {
    this.isLoading = true;
    const getAllRefSub$ = this.hrService.getReferralsAtHr().subscribe((resp) => {
      this.isLoading = false;
      this.data = resp;
      this.selectedReferral = null;
    });
    this.subscriptions$.push(getAllRefSub$);
  }

  public onClicked(data: any): void {
    this.selectedReferral = data;
  }

  public openDetailsModal(): void {
    this.isDetailsModalOpen = true;
  }

  public openUpdateStatusModal(): void {
    this.isUpdateModalOpen = true;
  }

  public closeDetailsModal(data): void {
    this.isDetailsModalOpen = false;
  }

  public closeUpdateModal(data): void {
    this.isUpdateModalOpen = false;
    if (data) {
      this.loadData();
    }
  }

  public onRefreshed(data): void {
    if (data) {
      this.loadData();
    }
  }
}
