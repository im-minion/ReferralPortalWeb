import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { OpenJob } from 'src/app/utilities/open-job-class';
import { HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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
}
