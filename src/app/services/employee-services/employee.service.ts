import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { environment } from 'src/environments/environment';
import { OpenJob } from '../../utilities/open-job-class';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { Referrals } from 'src/app/utilities/referrals-class';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private commonService: CommonService) { }

  getOpenJobs(): Observable<Array<OpenJob>> {
    return this.commonService.getMethod(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getOpenJobs');
  }

  getOpenJobById(jobId: string): Observable<OpenJob> {
    let hp = new HttpParams();
    hp = hp.append('jobId', jobId);
    return this.commonService.getMethodWithQueryParam(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getJobByJobId', hp);
  }

  addReferral(data: string, resume: any): Observable<any> {
    let hp = new HttpParams();
    hp = hp.append('myjson', data);
    const fd = new FormData();
    fd.append('file', resume);
    return this.commonService.postFormDataMethod(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'addReferral', hp, fd);
  }

  getReferralsByEmployeeId(employeeId: string): Observable<Array<Referrals>> {
    let hp = new HttpParams();
    hp = hp.append('employeeId', employeeId);
    return this.commonService.getMethodWithQueryParam(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getReferralsByEmployeeId', hp);
  }

  getFileByID(fileId: string) {
    let hp = new HttpParams();
    hp = hp.append('fileId', fileId);
    return this.commonService.getMethodWithQueryParamPDF(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getFileById', hp);
  }

  getAnalyticalInfo(employeeId: string, employeeRole: string): Observable<any> {
    let hp = new HttpParams();
    hp = hp.append('employeeId', employeeId);
    hp = hp.append('employeeRole',employeeRole);
    return this.commonService.getMethodWithQueryParam(environment.BASE_URL + environment.EMPLOYEE_END_POINT + 'getAnalyticalInfo', hp);
  }

}
