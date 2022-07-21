import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DxCircularGaugeModule } from 'devextreme-angular';

import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';

@NgModule({
  declarations: [
    TemperatureGaugeComponent,
  ],
  imports: [
    CommonModule,
    DxCircularGaugeModule,
  ],
  exports:[
    TemperatureGaugeComponent,
  ]
})
export class SharedModule { }
