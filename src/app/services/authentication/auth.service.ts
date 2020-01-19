import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';
import { Employee } from 'src/app/employee';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userRole$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  isLoggedIn() {
    return !!localStorage.getItem('employeeRole');
  }

  constructor(private commonService: CommonService) { }

  login(email, password) {
    const requestBody = {
      employeeId: email,
      password: password
    }
    return this.commonService.postMethod(environment.BASE_URL + environment.AUTH_END_POINT + 'login', requestBody);
  }

  setAuthToken(e: Employee) {
    localStorage.setItem('employeeRole', e.employeeRole);
    localStorage.setItem('employeeId', e.employeeId);
    this.updateUserRole( e.employeeRole);
  }

  updateUserRole(employeeRole: string) {
    this.userRole$.next(employeeRole);
  }

  setUserRoleUsingLocalStorage() {
    const userRoleFromLocalStorage: string = localStorage.getItem('employeeRole');
    if(userRoleFromLocalStorage) {
      this.updateUserRole(userRoleFromLocalStorage);
    }
  }
}
