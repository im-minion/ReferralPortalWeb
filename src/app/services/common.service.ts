import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpClient: HttpClient) { }

  getMethod(url:string) {
    return this.httpClient.get(url);
  }

  postMethod(url:any, requestBody: any) {
    return this.httpClient.post(url, requestBody).pipe();
  }

}
