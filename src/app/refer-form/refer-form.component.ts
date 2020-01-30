import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee-services/employee.service';
import { OpenJob } from '../services/employee-services/open-job-class';

@Component({
  selector: 'app-refer-form',
  templateUrl: './refer-form.component.html',
  styleUrls: ['./refer-form.component.scss']
})
export class ReferFormComponent implements OnInit {
  // sub$: Observable<string>;
  jobId: string;
  job: OpenJob = null;
  isLoading: boolean = true;
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

  }

  ngOnDestroy() {
    //unsubscribe;
  }

}
