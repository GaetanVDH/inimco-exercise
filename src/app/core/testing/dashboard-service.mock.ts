import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { TemperatureData } from '../models/temperature-data';
import { TemperatureTimeData } from '../models/temperature-time-data';

@Injectable()
export class DashboardServiceMock {
  constructor() {
  }

  public getTemperatureData(): Observable<TemperatureData> {
    return of({
      value: 80
    } as TemperatureData);
  }

  public getTemperatureDataOverTime(): Observable<Array<TemperatureTimeData>> {
    return of([{
      value: 190,
      time: new Date(),
    }] as Array<TemperatureTimeData>);
  }
}
