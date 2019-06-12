import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email, password) {
    const requestBody = {
      employeeId: email,
      password: password
    }
    return this.httpClient.post(environment.BASE_URL + environment.AUTH_END_POINT + 'login', requestBody).pipe();
  }
}
