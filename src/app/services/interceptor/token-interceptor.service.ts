import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedReq = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    });
    return next.handle(tokenizedReq);
  }

  constructor() { }
}
