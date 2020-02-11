import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee-services/employee.service';
import { Referrals } from '../utilities/referrals-class';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getReferralsByEmployeeId(sessionStorage.getItem('employeeId')).subscribe((response: Array<Referrals>) => {
      console.log(response[0])
    });
  }

}
