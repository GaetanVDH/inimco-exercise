import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxChartModule, DxCircularGaugeModule } from 'devextreme-angular';

import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';
import { TemperatureHistoryComponent } from './temperature-history/temperature-history.component';

@NgModule({
  declarations: [
    TemperatureGaugeComponent,
    TemperatureHistoryComponent,
  ],
  imports: [
    CommonModule,
    DxChartModule,
    DxCircularGaugeModule,
  ],
  exports:[
    TemperatureGaugeComponent,
    TemperatureHistoryComponent,
  ]
})
export class SharedModule { }
