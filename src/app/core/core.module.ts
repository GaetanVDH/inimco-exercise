import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardService } from './services/dashboard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    DashboardService,
  ]
})
export class CoreModule { }
