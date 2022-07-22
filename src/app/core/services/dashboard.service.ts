import { Injectable } from '@angular/core';

import { map, Observable, Subject, timer } from 'rxjs';

import { TemperatureData } from '../models/temperature-data';
import { TemperatureTimeData } from '../models/temperature-time-data';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private temperatureTimeSubject$: Subject<Array<TemperatureTimeData>> = new Subject<Array<TemperatureTimeData>>();
  private temperatureHistory: Array<TemperatureTimeData> = new Array<TemperatureTimeData>();

  private temperatureModifier: number = 0;
  private minTemperature: number = 55;
  private maxTemperature: number = 90;

  constructor() {
    this.temperatureHistory.push({
      time: new Date(),
      value: Math.round(Math.random() * (this.maxTemperature - this.minTemperature) + this.minTemperature),
    })
  }

  public getTemperatureData(): Observable<TemperatureData> {
    return timer(1500, 1500)
    .pipe(
      map(() => {
        let value = this.temperatureHistory[this.temperatureHistory.length - 1].value;

        value += Math.ceil(Math.random() * 2) * (Math.round(Math.random()) ? 1 : -1)
        value += this.temperatureModifier;

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

  public increaseTemperature(): void {
    this.temperatureModifier += 1;
  }

  public decreaseTemperature(): void {
    this.temperatureModifier -= 1;
  }
}
