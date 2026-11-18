import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogData {
private apiUrl = 'https://dr-vahidchamani.ir/api/Blogs';

  constructor(private http: HttpClient) { }

  getServices(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
