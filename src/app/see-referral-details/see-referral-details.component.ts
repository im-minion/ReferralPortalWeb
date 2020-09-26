import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { Referral } from '../utilities/referrals-class';

@Component({
  selector: 'app-see-referral-details',
  templateUrl: './see-referral-details.component.html',
  styleUrls: ['./see-referral-details.component.scss']
})
export class SeeReferralDetailsComponent implements OnInit {

  @Input()
  public isModalOpen: boolean = false;
  @Input()
  public detailsData: Referral = null;
  @Output()
  closeModal = new EventEmitter<boolean>();

  public isLoadingResume: boolean = false;

  constructor(private hmService: HmService) { }

  ngOnInit(): void {
  }

  close() {
    this.closeModal.next(false);
  }

  getFile(id: string) {
    this.isLoadingResume = true;
    this.hmService.getFileByID(id).subscribe(
      (response: any) => {
        this.downLoadFile(response, 'application/pdf');
      },
      (err) => {
        console.log(err);
        this.isLoadingResume = false;
      }
    );
  }

  downLoadFile(data: any, type: string) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    console.log(url);
    let pwa = window.open(url);
    this.isLoadingResume = false;
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }

}
