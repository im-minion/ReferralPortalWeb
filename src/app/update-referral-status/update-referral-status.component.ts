import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HmService } from '../services/hm-services/hm.service';
import { Referrals } from '../utilities/referrals-class';

@Component({
  selector: 'app-update-referral-status',
  templateUrl: './update-referral-status.component.html',
  styleUrls: ['./update-referral-status.component.scss']
})
export class UpdateReferralStatusComponent implements OnInit, OnDestroy {
  @Input()
  public isModalOpen: boolean = false;
  @Input()
  public updateData: Referrals = null;
  @Output()
  public closeModal = new EventEmitter<boolean>();

  public updateForm: FormGroup;
  public isLoadingUpdate: boolean = false;
  private subscriptions$: Subscription[] =[];

  constructor(private hmService: HmService) { }

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  ngOnInit(): void {
    this.updateForm = new FormGroup({
      referralEmailId: new FormControl({value: this.updateData.referralEmailId, disabled: true}, [Validators.required]),
      currentLevel: new FormControl({value: this.updateData.referralCurrentLevel, disabled: true}, [Validators.required]),
      referralCurrentStatus: new FormControl({value: this.updateData.referralCurrentStatus, disabled: true}, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  close() {
    this.closeModal.next(false);
  }

  updateReferral(data: any) {
    this.isLoadingUpdate = true;
    this.updateForm.patchValue({
      referralEmailId: this.updateData.referralEmailId,
      currentLevel: this.updateData.referralCurrentLevel
    });
    delete this.updateForm.value.referralCurrentStatus;
    const updateSub$ = this.hmService.updateReferral(this.updateForm.value).subscribe((resp: any) => {
      this.isLoadingUpdate = false;
      this.closeModal.next(true);
      this.updateForm.reset();
    },
      (err) => {
        console.log(err);
        this.isLoadingUpdate = false;
      }
    );
    this.subscriptions$.push(updateSub$);
  }

}
