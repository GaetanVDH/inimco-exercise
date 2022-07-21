import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';

import { TemperatureTimeData } from 'src/app/core/models/temperature-time-data';

@Component({
  selector: 'inimco-temperature-history-average',
  templateUrl: './temperature-history-average.component.html',
  styleUrls: ['./temperature-history-average.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureHistoryAverageComponent implements OnChanges {
  @Input() public temperatureHistoryData: Array<TemperatureTimeData>;

  public averageTemperature: number = 0;

  constructor() { }

  public ngOnChanges(): void {
    if (this.temperatureHistoryData && this.temperatureHistoryData.length) {
      let allTemps = 0;

      this.temperatureHistoryData.forEach((histTemp: TemperatureTimeData) => {
        allTemps += histTemp.value;
      });

      this.averageTemperature = Math.round(allTemps / this.temperatureHistoryData.length);
    }
  }
}
