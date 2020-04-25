import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../../config/config.service';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  dotnetApiPrefixUri: string;
  javaApiPrefixUri: string;

  constructor(private http: HttpClient, configService: ConfigService) {
    this.dotnetApiPrefixUri = configService.config.dotnetApiPrefixUri;
    this.javaApiPrefixUri = configService.config.javaApiPrefixUri;
  }

  getSomeDataFromBackend(): Observable<string> {
    return this.http.get<string>(`${this.dotnetApiPrefixUri}/sample/GetSampleData`);
  }

  getSomeDataFromDB(): Observable<string[]> {
    return this.http.get<string[]>(`${this.dotnetApiPrefixUri}/sample`);
  }

  getSomeDataFromJavaBackend(): Observable<string> {
    return this.http.get<string>(`${this.javaApiPrefixUri}/sample/GetSampleData`);
  }
  getSomeDataFromJavaDB(): Observable<string[]> {
    return this.http.get<string[]>(`${this.javaApiPrefixUri}/sample`);
  }
}
