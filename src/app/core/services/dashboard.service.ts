import { Injectable } from '@angular/core';

import { map, Observable, Subject, timer } from 'rxjs';

import { TemperatureData } from '../models/temperature-data';
import { TemperatureTimeData } from '../models/temperature-time-data';

@Injectable()
export class DashboardService {
  private temperatureTimeSubject$: Subject<Array<TemperatureTimeData>> = new Subject<Array<TemperatureTimeData>>();
  private temperatureHistory: Array<TemperatureTimeData> = new Array<TemperatureTimeData>();

  constructor() {
  }

  public getTemperatureData(): Observable<TemperatureData> {
    return timer(0, 1500)
    .pipe(
      map(() => {
        const value = Math.round(Math.random() * (90 - 55) + 55);

        if (this.temperatureHistory.length === 20) {
          this.temperatureHistory.shift();
        }

        this.temperatureHistory.push({
          value,
          time: new Date(),
        });

        this.temperatureTimeSubject$.next([...this.temperatureHistory]);

        return { value };
      })
    )
  }

  public getTemperatureDataOverTime(): Observable<Array<TemperatureTimeData>> {
    return this.temperatureTimeSubject$;
  }
}
