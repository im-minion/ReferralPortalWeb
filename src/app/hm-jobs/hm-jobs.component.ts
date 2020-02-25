import { Component, OnInit, Output, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { OpenJob } from '../utilities/open-job-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobStatus, PURPOSE } from '../app.constants';
import { TableDataService } from '../services/shared-service/table-data.service';
declare var $: any;
@Component({
  selector: 'app-hm-jobs',
  templateUrl: './hm-jobs.component.html',
  styleUrls: ['./hm-jobs.component.scss']
})
export class HmJobsComponent implements OnInit, OnChanges, OnDestroy {
  isLoading: boolean = true;
  displayedColumns: string[] = ['Job Id', 'Title', 'Visibility', 'Job Status', 'Update', 'Check Referrals'];
  dataSource: Array<OpenJob>;
  openJob: OpenJob = null;
  updateJobForm: FormGroup;
  _JobStatus: JobStatus = JobStatus;
  employeeId: string;
  isLoadingUpdate: boolean = false;
  constructor(private hmService: HmService, private tableDataService: TableDataService) {
  }

  ngOnInit() {
    this.employeeId = sessionStorage.getItem('employeeId');
    this.loadOpenJobs();
    this.updateJobForm = new FormGroup({
      jobDescription: new FormControl('', [Validators.required]),
      jobVisibility: new FormControl(false, [Validators.required]),
      jobStatus: new FormControl('', [Validators.required]),
      jobId: new FormControl()
    });
  }

  ngOnChanges() {
    this.loadOpenJobs();
  }

  ngOnDestroy() {
    this.tableDataService.clearData();
  }

  loadOpenJobs() {
    this.hmService.getOpenJobsByEmployeeId(this.employeeId).subscribe((resp: Array<OpenJob>) => {
      // this.dataSource = resp;
      this.tableDataService.changeDataSource(resp);
      this.tableDataService.changeDisplayedColumns(this.displayedColumns);
      this.isLoading = false;
    });

  }

  onClicked(data: any) {
    this.openJob = data;
    this.updateJobForm.patchValue({
      jobDescription: this.openJob.jobDescription,
      jobStatus: this.openJob.jobStatus,
      jobVisibility: this.openJob.jobVisibility,
      jobId: this.openJob.jobId
    });
    //  $("#updateModal").modal('show');
  }

  updateJob() {
    this.isLoadingUpdate = true;
    this.hmService.updateJobStatus(this.updateJobForm.value).subscribe(
      (resp: any) => {
        console.log(resp);
        this.isLoadingUpdate = false;
        this.loadOpenJobs();
        $("#updateModal").modal('hide');
      },
      (err: any) => {
        console.log(err);
        this.isLoadingUpdate = false;
      }
    );
  }

}
