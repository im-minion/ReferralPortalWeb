import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private commonService: CommonService) { }

  login(email, password) {
    const requestBody = {
      employeeId: email,
      password: password
    }
    return this.commonService.postMethod(environment.BASE_URL + environment.AUTH_END_POINT + 'login', requestBody);
  }
}
