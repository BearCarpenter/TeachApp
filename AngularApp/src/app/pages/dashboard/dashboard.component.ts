import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  backendResponse: string = 'brak danych';

  constructor(private dashboardService: DashboardService) {
  }

  onDownloadDataFromBackendClick() {
    this.dashboardService.getSomeDataFromBackend()
      .subscribe(someData => this.backendResponse = someData,
        (error) => this.backendResponse = error);
  }

  onDownloadDataFromDBClick() {
    this.dashboardService.getSomeDataFromDB()
      .subscribe(someData => this.backendResponse = someData[0],
        (error) => this.backendResponse = error);
  }

  onDownloadDataFromJavaBackendClick() {
    this.dashboardService.getSomeDataFromJavaBackend()
      .subscribe(someData => this.backendResponse = someData,
        (error) => this.backendResponse = error);
  }

  onDownloadDataFromJavaDBClick() {
    this.dashboardService.getSomeDataFromJavaDB()
      .subscribe(someData => this.backendResponse = someData[0],
        (error) => this.backendResponse = error);
  }
}
