import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HmService } from '../services/hm-services/hm.service';
import { HrService } from '../services/hr-service/hr.service';
import { Referral } from '../utilities/referrals-class';

@Component({
  selector: 'app-update-referral-status',
  templateUrl: './update-referral-status.component.html',
  styleUrls: ['./update-referral-status.component.scss']
})
export class UpdateReferralStatusComponent implements OnInit, OnDestroy {
  @Input()
  public isModalOpen: boolean = false;
  @Input()
  public updateData: Referral = null;
  @Input()
  private isHrRound: boolean = false;
  @Output()
  public closeModal = new EventEmitter<boolean>();

  public updateForm: FormGroup;
  public isLoadingUpdate: boolean = false;
  private subscriptions$: Subscription[] = [];

  constructor(private hmService: HmService, private hrService: HrService) { }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      referralEmailId: new FormControl({ value: this.updateData.referralEmailId, disabled: true }, [Validators.required]),
      currentLevel: new FormControl({ value: this.updateData.referralCurrentLevel, disabled: true }, [Validators.required]),
      referralCurrentStatus: new FormControl({ value: this.updateData.referralCurrentStatus, disabled: true }, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  close() {
    this.closeModal.emit(false);
  }

  updateReferral(data: any) {
    this.isLoadingUpdate = true;
    const payload = this.updateForm.getRawValue();
    delete payload.referralCurrentStatus;
    const updateSub$ = this.isHrRound ? this.hrService.updateReferral(payload).subscribe((resp: any) => {
      if(resp.updated) {
        this.isLoadingUpdate = false;
        this.closeModal.emit(true);
        this.updateForm.reset();
      } else {
        alert('ERROR!');
        this.isLoadingUpdate = false;
      }

    },
      (err) => {
        console.log(err);
        this.isLoadingUpdate = false;
      }
    ) : this.hmService.updateReferral(payload).subscribe((resp: any) => {
      if(resp.updated) {
        this.isLoadingUpdate = false;
        this.closeModal.emit(true);
        this.updateForm.reset();
      } else {
        alert('ERROR!');
        this.isLoadingUpdate = false;
      }
    },
      (err) => {
        console.log(err);
        this.isLoadingUpdate = false;
      }
    );
    this.subscriptions$.push(updateSub$);
  }

}
