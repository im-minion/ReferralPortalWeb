import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userRole$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  isLoggedIn() {
    return !!sessionStorage.getItem('employeeRole');
  }

  constructor(private commonService: CommonService) { }

  login(email, password) {
    const requestBody = {
      employeeId: email,
      password: password
    }
    return this.commonService.postMethod(environment.BASE_URL + environment.AUTH_END_POINT + 'login', requestBody);
  }

  setAuthToken(e: any) {
    sessionStorage.setItem('employeeRole', e.employeeRole);
    sessionStorage.setItem('employeeId', e.employeeId);
    sessionStorage.setItem('token', e.accessToken);
    this.updateUserRole(e.employeeRole);
  }

  updateUserRole(employeeRole: string) {
    this.userRole$.next(employeeRole);
  }

  setUserRoleUsingSessionStorage() {
    const userRoleFromSessionStorage: string = sessionStorage.getItem('employeeRole');
    if (userRoleFromSessionStorage) {
      this.updateUserRole(userRoleFromSessionStorage);
    }
  }
}
