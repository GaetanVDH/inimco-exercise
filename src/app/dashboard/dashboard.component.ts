import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'
import { TemperatureData } from '../core/models/temperature-data';
import { DashboardService } from '../core/services/dashboard.service';

@Component({
  selector: 'inimco-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public temperatureData$: Observable<TemperatureData>;

  constructor(
    private readonly dashboardService: DashboardService
  ) { }

  public ngOnInit(): void {
    this.temperatureData$ = this.dashboardService.getTemperatureData()
      .pipe(tap(console.log));
  }
}
