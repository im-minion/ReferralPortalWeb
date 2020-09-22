import { Component, OnInit, OnDestroy } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { Referrals } from '../utilities/referrals-class';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COLUMNS, ReferralLevels, ReferralStatus } from '../app.constants';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hm-referrals',
  templateUrl: './hm-referrals.component.html',
  styleUrls: ['./hm-referrals.component.scss']
})
export class HmReferralsComponent implements OnInit, OnDestroy {
  public jobId: string = null;
  public isLoading: boolean = true;
  public updateForm: FormGroup;
  public displayedColumns: string[] = [COLUMNS.JOB_ID, COLUMNS.REFERRAL_NAME, COLUMNS.RESUME, COLUMNS.CURRENT_LEVEL, COLUMNS.CURRENT_STATUS, COLUMNS.PROGRESS];
  public selectedReferral: Referrals = null;
  public data: Array<Referrals> = [];
  public isDetailsModalOpen: boolean = false;
  public isUpdateModalOpen: boolean = false;

  private subscriptions$: Subscription[] =[];

  constructor(private route: ActivatedRoute, private hmService: HmService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
    });

    this.loadData();
    this.updateForm = new FormGroup({
      referralEmailId: new FormControl(null, [Validators.required]),
      currentLevel: new FormControl(null, [Validators.required]),
      referralCurrentStatus: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  public openDetailsModal(): void {
    this.isDetailsModalOpen = true;
  }

  public openUpdateStatusModal(): void {
    this.isUpdateModalOpen = true;
  }

  private loadData(): void {
    this.isLoading = true;
    const refOfJobSub$ = this.hmService.getReferralsOfJobId(this.jobId).subscribe((resp: Array<Referrals>) => {
      this.isLoading = false;
      this.data = resp;
      this.selectedReferral = null;
    });
    this.subscriptions$.push(refOfJobSub$);
  }

  onClicked(data: any) {
    this.selectedReferral = data;
  }

  public shouldDisableUpdate() {
    return !this.selectedReferral ||
      (
        (this.selectedReferral.referralCurrentStatus === ReferralStatus.REJECTED) || (this.selectedReferral.referralCurrentLevel === ReferralLevels.HR)
      );
  }

  public onRefreshed(data): void {
    if (data) {
      this.loadData();
    }
  }
  public closeDetailsModal(data): void {
    this.isDetailsModalOpen = false;
  }

  public closeUpdateModal(data): void {
    this.isUpdateModalOpen = false;
    if(data) {
      this.loadData();
    }
  }
}
