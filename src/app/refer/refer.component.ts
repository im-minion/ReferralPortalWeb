import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-services/employee.service';
import { OpenJobs } from '../services/employee-services/open-jobs-class';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss']
})
export class ReferComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  openJobs: Array<OpenJobs>;

  ngOnInit() {
    this.employeeService.getOpenJobs().subscribe((response: Array<OpenJobs>) => {
      this.openJobs = response;
    });
  }
}