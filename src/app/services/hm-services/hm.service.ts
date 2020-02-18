import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { OpenJob } from 'src/app/utilities/open-job-class';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Referrals } from 'src/app/utilities/referrals-class';

@Injectable({
  providedIn: 'root'
})
export class HmService {
  constructor(private commonService: CommonService) { }

  getOpenJobsByEmployeeId(employeeId: string): Observable<Array<OpenJob>> {
    let hp = new HttpParams();
    hp = hp.append('employeeId', employeeId);
    return this.commonService.getMethodWithQueryParam(environment.BASE_URL + environment.HM_END_POINT + 'getOpenJobs', hp);
  }

  updateJobStatus(updateJobReq: any): Observable<boolean> {
    return this.commonService.putMethod(environment.BASE_URL + environment.HM_END_POINT + 'updateJob', updateJobReq)
  }

  insertJob(newJobRequest: OpenJob): Observable<any> {
    return this.commonService.postMethod(environment.BASE_URL + environment.HM_END_POINT + 'insertJob', newJobRequest);
  }

  getReferralsOfJobId(jobId: string): Observable<Array<Referrals>> {
    let hp = new HttpParams();
    hp = hp.append('jobId', jobId);
    return this.commonService.getMethodWithQueryParam(environment.BASE_URL + environment.HM_END_POINT + 'getReferrals', hp)
  }

  // getAllReferrals(): Observable<Array<Referrals>> {
  //   return this.commonService.getMethod(environment.BASE_URL + environment.HM_END_POINT + 'getAllReferralsAtHM');
  // }

  updateReferral(data: any): Observable<any> {
    return this.commonService.postMethod(environment.BASE_URL + environment.HM_END_POINT + 'updateReferralsStatus', data)
  }

}
