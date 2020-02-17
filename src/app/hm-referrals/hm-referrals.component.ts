import { Component, OnInit, OnDestroy } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { Referrals } from '../utilities/referrals-class';
import { TableDataService } from '../services/shared-service/table-data.service';
import { ActivatedRoute } from '@angular/router';

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
  constructor(private route: ActivatedRoute, private hmService: HmService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
      console.log(param['jobId']);
    });

    this.hmService.getReferralsOfJobId(this.jobId).subscribe((resp: Array<Referrals>) => {
      console.log(resp);
      this.tableDataService.changeDataSource(resp);
      this.tableDataService.changeDisplayedColumns(['Referral Name','Job Id']);
    });
  }

  ngOnDestroy() {
    this.tableDataService.clearData();
  }

  onClicked(data: any) {
    
  }

}
