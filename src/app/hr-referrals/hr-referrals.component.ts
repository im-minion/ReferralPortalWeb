import { Component, OnInit } from '@angular/core';
import { HrService } from '../services/hr-service/hr.service';
import { TableDataService } from '../services/shared-service/table-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-hr-referrals',
  templateUrl: './hr-referrals.component.html',
  styleUrls: ['./hr-referrals.component.scss']
})
export class HrReferralsComponent implements OnInit {
  detailsData: any;
  updateData: any;
  updateForm: FormGroup;
  public isLoading: boolean = true;
  public isLoadingUpdate: boolean = false;
  constructor(private hrService: HrService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.loadData();

    this.updateForm = new FormGroup({
      referralEmailId: new FormControl(null,[Validators.required]),
      currentLevel: new FormControl(null, [Validators.required]),
      referralCurrentStatus: new FormControl(null, [Validators.required]),
      status: new FormControl(null, [Validators.required]),
      reason: new FormControl(null, [Validators.required])
    });
  }

  loadData() {
    this.isLoading = true;
    this.hrService.getReferralsAtHr().subscribe((resp)=> {
      this.isLoading = false;
      this.tableDataService.changeDataSource(resp);
      this.tableDataService.changeDisplayedColumns(['Job Id', 'Referral Name', 'Resume', 'Current Level', 'Current Status', 'See Details', 'Hire or Reject']);
    });
  }

  onClicked(data: any) {
    this.detailsData = data;
    this.updateData = data;
  }

  public updateReferral(data:any): void {
    this.isLoadingUpdate = true;
    this.updateForm.patchValue({
      referralEmailId: this.updateData.referralEmailId,
      currentLevel: this.updateData.referralCurrentLevel
    });
    // remove referralCurrentStatus from updateForm as I don't want to send it to api call
    delete this.updateForm.value.referralCurrentStatus;
    this.hrService.updateReferral(this.updateForm.value).subscribe((resp: any)=>{
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
