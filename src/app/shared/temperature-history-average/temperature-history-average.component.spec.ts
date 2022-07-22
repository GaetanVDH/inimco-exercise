import { ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxChartModule } from 'devextreme-angular';
import { TemperatureTimeData } from 'src/app/core/models/temperature-time-data';

import { TemperatureHistoryAverageComponent } from './temperature-history-average.component';

describe('TemperatureHistoryAverageComponent', () => {
  let component: TemperatureHistoryAverageComponent;
  let fixture: ComponentFixture<TemperatureHistoryAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DxChartModule,
      ],
      declarations: [TemperatureHistoryAverageComponent]
    })
      .compileComponents();

    TestBed.overrideComponent(TemperatureHistoryAverageComponent, {
      set: { changeDetection: ChangeDetectionStrategy.Default }
    })

    fixture = TestBed.createComponent(TemperatureHistoryAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
