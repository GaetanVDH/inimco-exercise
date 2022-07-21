import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxChartModule, DxCircularGaugeModule, DxDataGridModule } from 'devextreme-angular';

import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';
import { TemperatureHistoryComponent } from './temperature-history/temperature-history.component';
import { TemperatureHistoryAverageComponent } from './temperature-history-average/temperature-history-average.component';

@NgModule({
  declarations: [
    TemperatureGaugeComponent,
    TemperatureHistoryComponent,
    TemperatureHistoryAverageComponent,
  ],
  imports: [
    CommonModule,
    DxChartModule,
    DxDataGridModule,
    DxCircularGaugeModule,
  ],
  exports:[
    TemperatureGaugeComponent,
    TemperatureHistoryComponent,
    TemperatureHistoryAverageComponent,
  ]
})
export class SharedModule { }
