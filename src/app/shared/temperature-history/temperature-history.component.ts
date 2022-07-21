import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { TemperatureTimeData } from 'src/app/core/models/temperature-time-data';

@Component({
  selector: 'inimco-temperature-history',
  templateUrl: './temperature-history.component.html',
  styleUrls: ['./temperature-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureHistoryComponent implements OnInit {
  @Input() public temperatureHistoryData: Array<TemperatureTimeData>;

  constructor() { }

  public ngOnInit(): void {
  }
}
