import { Component, OnInit } from '@angular/core';
import { HrService } from '../services/hr-service/hr.service';
import { TableDataService } from '../services/shared-service/table-data.service';

@Component({
  selector: 'app-hr-all-referrals',
  templateUrl: './hr-all-referrals.component.html',
  styleUrls: ['./hr-all-referrals.component.scss']
})
export class HrAllReferralsComponent implements OnInit {
  detailsData: any;
  public isLoading: boolean = true;
  constructor(private hrService: HrService, private tableDataService: TableDataService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.hrService.getAllReferralsForHr().subscribe((resp)=> {
      this.isLoading = false;
      this.tableDataService.changeDataSource(resp);
      this.tableDataService.changeDisplayedColumns(['Job Id', 'Referral Name', 'Resume', 'Current Level', 'Current Status', 'See Details']);
    });
  }

  onClicked(data: any) {
    this.detailsData = data;
  }
}
