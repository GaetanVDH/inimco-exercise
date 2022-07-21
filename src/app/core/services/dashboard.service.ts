import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { TemperatureData } from '../models/temperature-data';

@Injectable()
export class DashboardService {
  constructor() {
  }

  public getTemperatureData(): Observable<TemperatureData> {
    return timer(1000,1000)
    .pipe(
      map(() => {
        return { value: Math.random() * 100};
      })
    )
  }
}
