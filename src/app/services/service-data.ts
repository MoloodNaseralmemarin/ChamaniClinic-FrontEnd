import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceData {

  private apiUrl = 'https://dr-vahidchamani.ir/api/Services';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}