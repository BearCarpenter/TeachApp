import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  private prefixUrl = 'http://localhost:8080/api/sample';//'https://www.teach-app.tk/napi/';

  constructor(private http: HttpClient) { }

  getSomeDataFromBackend(): Observable<string> {
    return this.http.get<string>(`${this.prefixUrl}/GetSampleData`);
  }

  getSomeDataFromDB(): Observable<string> {
    return this.http.get<string>(`${this.prefixUrl}`);
  }
}
