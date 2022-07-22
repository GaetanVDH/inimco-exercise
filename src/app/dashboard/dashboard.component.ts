import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { TemperatureData } from '../core/models/temperature-data';
import { TemperatureTimeData } from '../core/models/temperature-time-data';
import { DashboardService } from '../core/services/dashboard.service';

@Component({
  selector: 'inimco-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public temperatureData$: Observable<TemperatureData>;
  public temperatureHistoryData$: Observable<Array<TemperatureTimeData>>;

  constructor(
    private readonly dashboardService: DashboardService
  ) { }

  public ngOnInit(): void {
    this.temperatureData$ = this.dashboardService.getTemperatureData();
    this.temperatureHistoryData$ = this.dashboardService.getTemperatureDataOverTime();
  }

  public increaseTemperature(): void {
    this.dashboardService.increaseTemperature();
  }

  public decreaseTemperature(): void {
    this.dashboardService.decreaseTemperature();
  }
}
