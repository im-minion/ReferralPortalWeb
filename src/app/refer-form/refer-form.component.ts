import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee-services/employee.service';
import { OpenJob } from '../utilities/open-job-class';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-refer-form',
  templateUrl: './refer-form.component.html',
  styleUrls: ['./refer-form.component.scss']
})
export class ReferFormComponent implements OnInit {
  // sub$: Observable<string>;
  referForm: FormGroup;
  jobId: string;
  job: OpenJob = null;
  isLoading: boolean = true;
  resumeAdded: boolean = false;
  isLoadingSubmit: boolean = false;
  resume: any = null;
  constructor(private route: ActivatedRoute,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    // this.sub$ = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     of(params.get('jobId'))
    //   )
    // );
    this.route.params.subscribe(param => {
      this.jobId = param['jobId'];
    });

    this.employeeService.getOpenJobById(this.jobId).subscribe(jobDetails => {
      this.job = jobDetails;
      this.isLoading = false;
    });
    this.referForm = new FormGroup({
      referralEmailId: new FormControl('', [Validators.required, Validators.email]),
      referralName: new FormControl('', [Validators.required]),
      panNumber: new FormControl('', [Validators.required]),
      dob: new FormControl('', [Validators.required]),
      yoe: new FormControl('', [Validators.required]),
      primarySkill: new FormControl('', [Validators.required]),
      secondarySkill: new FormControl('', [Validators.required]),
      //jobId, referDate, referredBy -> not be input
      jobId: new FormControl(this.jobId),
      referredBy: new FormControl(sessionStorage.getItem('employeeId')),
      referDate: new FormControl(new Date())
    });

  }

  ngOnDestroy() {
    //unsubscribe;
  }
  
  submit() {
    this.isLoadingSubmit = true;
    console.log(this.resume);
    console.log(this.referForm.value);
    console.log(JSON.stringify(this.referForm.value));
    this.employeeService.addReferral(JSON.stringify(this.referForm.value), this.resume).subscribe(resp => {
      console.log(resp);
      if(resp.referred) {
        this.referForm.reset();
      }
      alert(resp.message);
      this.isLoadingSubmit = false;
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      console.log(event.target.files[0]);
      this.resume = event.target.files[0]
      this.resumeAdded = true;
    }
  }

}
