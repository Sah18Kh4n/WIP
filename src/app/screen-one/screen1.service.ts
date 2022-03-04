import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dashboard, User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class Screen1Service {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  downloadFile(): any {
    return this.http.get('http://localhost:8200/api/csvtarget/downloadcsv', {
      responseType: 'blob',
    });
  }

  downloadPdf(): any {
    let options = {
      headers: { "Content-Type": "application/json", Accept: "application/pdf" }
    };
    return this.http.get('http://localhost:8200/api/pdftarget/pdfdownload', {
      responseType: 'blob' as 'json',
    });
  }

  postUser(user: User[]): Observable<any> {
    return this.http.post(
      'http://localhost:8200/api/csvtarget/adddatatocsv',
      JSON.stringify(user),
      this.httpOptions
    );
  }

  cataloguePost(dashboard: dashboard[]): Observable<any> {
    let options = {
      headers: { "Content-Type": "application/json", Accept: "application/pdf" }
    };
    return this.http.post(
      'http://localhost:8200/api/pdftarget/pdfdata',
      JSON.stringify(dashboard),
      this.httpOptions,

    );
    }



}
