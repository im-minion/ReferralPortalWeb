import { Component, OnInit } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { OpenJob } from '../utilities/open-job-class';

@Component({
  selector: 'app-hm-jobs',
  templateUrl: './hm-jobs.component.html',
  styleUrls: ['./hm-jobs.component.scss']
})
export class HmJobsComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['Job Id', 'Title', 'Visibility', 'Job Status', 'See Details'];
  dataSource: Array<OpenJob>; 
  constructor(private hmService: HmService) { }

  ngOnInit() {
    this.hmService.getOpenJobsByEmployeeId(sessionStorage.getItem('employeeId')).subscribe((resp: Array<OpenJob>) => {
      console.log(resp);
      this.dataSource = resp;
      this.isLoading = false;
    });
  }

}
