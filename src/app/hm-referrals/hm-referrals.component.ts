import { Component, OnInit, OnDestroy } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { Referrals } from '../utilities/referrals-class';
import { TableDataService } from '../services/shared-service/table-data.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-hm-referrals',
  templateUrl: './hm-referrals.component.html',
  styleUrls: ['./hm-referrals.component.scss']
})
export class HmReferralsComponent implements OnInit, OnDestroy {
  jobId: string;
  isLoading: boolean = true;
  detailsData: any;
  updateData: any;
  updateForm: FormGroup;

  isLoadingUpdate: boolean = false;
  isLoadingResume: boolean = false;

  constructor(private route: ActivatedRoute, private hmService: HmService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
    });

    this.loadData();
    this.updateForm = new FormGroup({
      referralEmailId: new FormControl(null,[Validators.required]),
      currentLevel: new FormControl(null, [Validators.required]),
      referralCurrentStatus: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  ngOnDestroy() {
    this.tableDataService.clearData();
  }

  loadData() {
    this.hmService.getReferralsOfJobId(this.jobId).subscribe((resp: Array<Referrals>) => {
      this.isLoading = false;
      this.tableDataService.changeDataSource(resp);
      this.tableDataService.changeDisplayedColumns(['Job Id', 'Referral Name', 'Resume', 'Current Level', 'Current Status', 'See Details', 'Update Status']);
    });
  }

  onClicked(data: any) {
    console.log(data);
    this.detailsData = data;
    this.updateData = data;
  }
  updateReferral(data:any) {
    this.isLoadingUpdate = true;
    this.updateForm.patchValue({
      referralEmailId: this.updateData.referralEmailId,
      currentLevel: this.updateData.referralCurrentLevel
    });
    //remove referralCurrentStatus from updateForm as I don't want to send it to api call
    delete this.updateForm.value.referralCurrentStatus;
    this.hmService.updateReferral(this.updateForm.value).subscribe((resp: any)=>{
      this.isLoadingUpdate = false;
      this.loadData();
      this.updateForm.reset();
      $("#updateModal").modal('hide');
    },
    (err) => {
      console.log(err);
      this.isLoadingUpdate = false;
    }
    );
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
    let pwa = window.open(url);
    this.isLoadingResume = false;
    if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
      alert('Please disable your Pop-up blocker and try again.');
    }
  }
}
