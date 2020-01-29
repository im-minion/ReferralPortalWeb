import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getMethod(url: string): any {
    return this.httpClient.get(url);
  }

  getMethodWithQueryParam(url: string, param: HttpParams): any {
    return this.httpClient.get(url, { params: param });
  }

  postMethod(url: any, requestBody: any): any {
    return this.httpClient.post(url, requestBody).pipe();
  }

}
