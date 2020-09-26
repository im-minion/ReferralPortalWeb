import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Referral } from 'src/app/utilities/referrals-class';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private commonService: CommonService) { }

  getReferralsAtHr(): Observable<Array<Referral>>{
    return this.commonService.getMethod(environment.BASE_URL + environment.HR_END_POINT + 'getReferralsAtHr');
  }

  getAllReferralsForHr(): Observable<Array<Referral>> {
    return this.commonService.getMethod(environment.BASE_URL + environment.HR_END_POINT + 'getAllReferrals');
  }

  updateReferral(data: any): Observable<any> {
    return this.commonService.postMethod(environment.BASE_URL + environment.HR_END_POINT + 'updateReferralsStatus', data)
  }
}
