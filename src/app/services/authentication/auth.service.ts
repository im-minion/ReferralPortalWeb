import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
  


  // private log(message: string) {
  //   this.messageService.add(`HeroService: ${message}`);
  // }
}
