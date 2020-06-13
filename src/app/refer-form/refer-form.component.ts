import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public referForm: FormGroup;
  public jobId: string;
  public job: OpenJob = null;
  public isLoading: boolean = true;
  public resumeAdded: boolean = false;
  public isLoadingSubmit: boolean = false;
  public resume: any = null;
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
    this.employeeService.addReferral(JSON.stringify(this.referForm.value), this.resume).subscribe(resp => {
      console.log(resp);
      if (resp.referred) {
        this.referForm.reset();
      }
      alert(resp.message);
      this.isLoadingSubmit = false;
    });
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      this.resume = event.target.files[0]
      this.resumeAdded = true;
    }
  }

}
