import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, of, Subscription, Subject } from 'rxjs';
import { EmployeeService } from '../services/employee-services/employee.service';
import { switchMap } from 'rxjs/operators';
import { OpenJob } from '../services/employee-services/open-job-class';
import { FormGroup } from '@angular/forms';

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
    private router: Router,
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
