import { Injectable } from '@angular/core';
import { Observable, of, Subject, switchMap, timer } from 'rxjs';
import { TemperatureData } from '../models/temperature-data';

@Injectable()
export class DashboardService {
  private temperature$: Subject<TemperatureData>;

  constructor() {

  }

  public getTemperatureData(): Observable<TemperatureData> {
    return this.temperature$;
  }
}
