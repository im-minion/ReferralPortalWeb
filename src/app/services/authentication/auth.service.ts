import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userRole$: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public isLoggedIn(): boolean {
    return !!sessionStorage.getItem('employeeRole');
  }

  constructor(private commonService: CommonService) { }

  public login(email, password): Observable<any> {
    const requestBody = {
      employeeId: email,
      password: password
    }
    return this.commonService.postMethod(environment.BASE_URL + environment.AUTH_END_POINT + 'login', requestBody);
  }

  public register(payload: any): Observable<any> {
    return this.commonService.postMethod(environment.BASE_URL + environment.AUTH_END_POINT + 'register', payload);
  }

  public setAuthToken(e: any): void {
    sessionStorage.setItem('employeeRole', e.employeeRole);
    sessionStorage.setItem('employeeId', e.employeeId);
    sessionStorage.setItem('token', e.accessToken);
    this.updateUserRole(e.employeeRole);
  }

  public updateUserRole(employeeRole: string): void {
    this.userRole$.next(employeeRole);
  }

  public setUserRoleUsingSessionStorage(): void {
    const userRoleFromSessionStorage: string = sessionStorage.getItem('employeeRole');
    if (userRoleFromSessionStorage) {
      this.updateUserRole(userRoleFromSessionStorage);
    }
  }
}
