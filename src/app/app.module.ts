import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DxCircularGaugeModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { TemperatureGaugeComponent } from './temperature-gauge/temperature-gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TemperatureGaugeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DxCircularGaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
