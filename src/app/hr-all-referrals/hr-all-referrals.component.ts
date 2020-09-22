import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { COLUMNS } from '../app.constants';
import { HrService } from '../services/hr-service/hr.service';
import { Referrals } from '../utilities/referrals-class';

@Component({
  selector: 'app-hr-all-referrals',
  templateUrl: './hr-all-referrals.component.html',
  styleUrls: ['./hr-all-referrals.component.scss']
})
export class HrAllReferralsComponent implements OnInit, OnDestroy {
  public isLoading: boolean = true;
  private subscriptions$: Subscription[] = [];
  public displayedColumns: string[] = [COLUMNS.JOB_ID, COLUMNS.REFERRAL_NAME, COLUMNS.RESUME, COLUMNS.CURRENT_LEVEL, COLUMNS.CURRENT_STATUS];
  public data: Array<Referrals> = [];
  public selectedReferral: Referrals = null;
  public isDetailsModalOpen: boolean = false;

  constructor(private hrService: HrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  private loadData(): void {
    this.isLoading = true;
    const allRefSub$ = this.hrService.getAllReferralsForHr().subscribe((resp) => {
      this.isLoading = false;
      this.data = resp;
    });
    this.subscriptions$.push(allRefSub$);
  }

  public onClicked(data: any) {
    this.selectedReferral = data;
  }

  public onRefreshed(data): void {
    if (data) {
      this.loadData();
    }
  }

  public closeDetailsModal(data): void {
    this.isDetailsModalOpen = false;
  }

  public openDetailsModal(): void {
    this.isDetailsModalOpen = true;
  }

}
