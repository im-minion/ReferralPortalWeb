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
/*
referralEmailId: "Merry@chris.com"
referralName: "Merry Chris"
jobId: "153"
referDate: "2020-02-11T04:39:27.030Z"
panNumber: "PMFPM5728T"
dob: "1993-05-06"
yoe: null
primarySkill: "Mule"
secondarySkill: "Java"
resumeV2: "5e42303aa6d2750004d6cce4"
referralCurrentLevel: "RESUME_SCREENING"
referralCurrentStatus: "PENDING"
referredBy: "40801"
referralStatusReasonsList: null
referralId: "5e42303aa6d2750004d6cce6"
*/
  // displayedColumns: string[] = ['Job Id', 'Referral Name', 'Resume', 'Current Level', 'Current Status', 'Details'];
  jobId: string;
  isLoading: boolean = true;
  detailsData: any;
  updateData: any;
  updateForm: FormGroup;

  isLoadingUpdate: boolean = false;

  constructor(private route: ActivatedRoute, private hmService: HmService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
      console.log(param['jobId']);
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
    this.detailsData = JSON.stringify(data);
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
    console.log(this.updateForm.value);
    this.hmService.updateReferral(this.updateForm.value).subscribe((resp: any)=>{
      console.log(resp);
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

}
