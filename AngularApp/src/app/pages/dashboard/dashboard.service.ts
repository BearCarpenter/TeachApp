import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DashboardService {

  private prefixUrl = 'https://www.teach-app.tk/api/sample';

  constructor(private http: HttpClient) { }

  getSomeDataFromBackend(): Observable<string> {
    return this.http.get<string>(`${this.prefixUrl}/GetSampleData`);
  }

  getSomeDataFromDB(): Observable<string[]> {
    return this.http.get<string[]>(`${this.prefixUrl}`);
  }

  getSomeDataFromJavaBackend(): Observable<string> {
    return this.http.get<string>(`https://www.teach-app.tk/japi/sample/GetSampleData`);
  }
  getSomeDataFromJavaDB(): Observable<string[]> {
    return this.http.get<string[]>(`https://www.teach-app.tk/japi/sample`);
  }
}
