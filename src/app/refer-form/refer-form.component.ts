import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable, of } from 'rxjs';
import { EmployeeService } from '../services/employee-services/employee.service';
import { switchMap } from 'rxjs/operators';
import { OpenJobs } from '../services/employee-services/open-jobs-class';

@Component({
  selector: 'app-refer-form',
  templateUrl: './refer-form.component.html',
  styleUrls: ['./refer-form.component.scss']
})
export class ReferFormComponent implements OnInit {

  sub$: Observable<string>;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.sub$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        of(params.get('jobId'))
      )
    );
  }

  ngOnDestroy() {
    // this.sub$.unsubscribe();
  }

}
