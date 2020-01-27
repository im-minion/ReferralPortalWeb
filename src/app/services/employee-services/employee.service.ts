import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private commonService: CommonService) { }

  getOpenJobs(): any {
    return this.commonService.getMethod(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getOpenJob');
  }
}
