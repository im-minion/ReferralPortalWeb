import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-services/employee.service';
import { OpenJob } from '../utilities/open-job-class';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.component.html',
  styleUrls: ['./refer.component.scss']
})
export class ReferComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  isLoading: boolean = true;
  openJobs: Array<OpenJob> = [];

  ngOnInit() {
    this.employeeService.getOpenJobs().subscribe((response: Array<OpenJob>) => {
      this.openJobs = response;
      this.isLoading = false;
    });
  }
}