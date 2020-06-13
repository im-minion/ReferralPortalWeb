import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Employee } from 'src/app/employee';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private commonService: CommonService) { }

  getAllEmployees(): Observable<Array<Employee>> {
    return this.commonService.getMethod(environment.BASE_URL + environment.ADMIN_END_POINT + 'getAllEmployees');
  }
}
