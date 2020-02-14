import { Component, OnInit } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { OpenJob } from '../utilities/open-job-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobStatus } from '../app.constants';

@Component({
  selector: 'app-hm-jobs',
  templateUrl: './hm-jobs.component.html',
  styleUrls: ['./hm-jobs.component.scss']
})
export class HmJobsComponent implements OnInit {
  isLoading: boolean = true;
  displayedColumns: string[] = ['Job Id', 'Title', 'Visibility', 'Job Status', 'See Details'];
  dataSource: Array<OpenJob>;
  openJob: OpenJob = null;
  updateJobForm: FormGroup;
  _JobStatus: JobStatus = JobStatus;
  constructor(private hmService: HmService) { }

  ngOnInit() {
    this.hmService.getOpenJobsByEmployeeId(sessionStorage.getItem('employeeId')).subscribe((resp: Array<OpenJob>) => {
      console.log(resp);
      this.dataSource = resp;
      this.isLoading = false;
    });

    this.updateJobForm = new FormGroup({
      jobDescription: new FormControl('', [Validators.required]),
      jobVisibility: new FormControl( false, [Validators.required]),
      jobStatus: new FormControl('', [Validators.required])
    });
  }
  
  onClicked(data: any) {
    console.log("HM_JOB_DATA", data);
    this.openJob = data;
    this.updateJobForm.patchValue({ jobDescription: this.openJob.jobDescription,
    jobStatus: this.openJob.jobStatus,
    jobVisibility: this.openJob.jobVisibility
   });
  }

  rowClick(data: OpenJob) {
    console.log(data);
    // $("#updateModal").modal('show');
  }
  
  updateJob() {
    console.log( 
      this.updateJobForm.value);
  }

}
