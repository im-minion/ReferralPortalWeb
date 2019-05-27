import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.httpClient.post('http://localhost:9090/rp/auth/login', requestBody).pipe();
  }
  


  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
