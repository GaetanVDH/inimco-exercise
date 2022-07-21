import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TemperatureData } from '../core/models/temperature-data';

@Component({
  selector: 'inimco-temperature-gauge',
  templateUrl: './temperature-gauge.component.html',
  styleUrls: ['./temperature-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemperatureGaugeComponent implements OnInit {
  @Input() public temperatureData: TemperatureData;

  constructor() { }

  public ngOnInit(): void {
  }
}
