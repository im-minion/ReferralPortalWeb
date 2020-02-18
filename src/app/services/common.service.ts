import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  postFormDataMethod(url: any, param: HttpParams, file: FormData): any {
    return this.httpClient.post(url, file, { params: param });
  }

  putMethod(url: any, requestBody: any): Observable<any> {
    return this.httpClient.put(url, requestBody).pipe();
  }

  getMethodWithQueryParamPDF(url: string, param: HttpParams) {
    return this.httpClient.get(url,{params: param}).subscribe((data: Blob)=> {
      var file = new Blob([data], {type: 'application/pdf'});
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    },
    err => console.log('error',err)
    );
  }

}
