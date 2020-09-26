import { Component, OnInit, OnChanges, OnDestroy, ViewChild } from '@angular/core';
import { HmService } from '../services/hm-services/hm.service';
import { OpenJob } from '../utilities/open-job-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COLUMNS, JobStatus } from '../app.constants';
import { ClrForm } from '@clr/angular';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-hm-jobs',
  templateUrl: './hm-jobs.component.html',
  styleUrls: ['./hm-jobs.component.scss']
})
export class HmJobsComponent implements OnInit, OnChanges, OnDestroy {
  public readonly _JobStatus = JobStatus;

  public isLoading: boolean = true;
  public openJob: OpenJob = null;
  public updateJobForm: FormGroup;
  public isLoadingUpdate: boolean = false;
  @ViewChild(ClrForm, { static: true }) clrForm;
  private employeeId: string;
  public data: Array<OpenJob> = [];
  public selectedJob: OpenJob = null;
  public isJobModalOpen: boolean = false;
  public displayedColumns: string[] = [COLUMNS.JOB_ID, COLUMNS.JOB_TITLE, COLUMNS.JOB_VISIBILITY, COLUMNS.JOB_STATUS];

  private subscriptions$: Subscription[] = [];
  constructor(private hmService: HmService) {
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

  ngOnDestroy(): void {
    this.subscriptions$.map(sub => sub && sub.unsubscribe());
  }

  loadOpenJobs() {
    this.isLoading = true;
    const jobsSub$ = this.hmService.getOpenJobsByEmployeeId(this.employeeId).subscribe((resp: Array<OpenJob>) => {
      this.data = resp;
      this.isLoading = false;
    });
    this.subscriptions$.push(jobsSub$);
  }

  onClicked(data: any) {
    this.selectedJob = data;
  }

  openUpdateJobModal() {
    this.isJobModalOpen = true;
    this.openJob = this.selectedJob;
    this.updateJobForm.patchValue({
      jobDescription: this.openJob.jobDescription,
      jobStatus: this.openJob.jobStatus,
      jobVisibility: this.openJob.jobVisibility,
      jobId: this.openJob.jobId
    });
  }

  update() {
    this.isLoadingUpdate = true;
    const updateJobSub$ = this.hmService.updateJobStatus(this.updateJobForm.value).subscribe(
      () => {
        this.isJobModalOpen = false;
        this.isLoadingUpdate = false;
        this.loadOpenJobs();
      },
      (err: any) => {
        console.log(err);
        this.isLoadingUpdate = false;
      }
    );
    this.subscriptions$.push(updateJobSub$);
  }

  public onRefreshed(data): void {
    if (data) {
      this.loadOpenJobs();
    }
  }

}
