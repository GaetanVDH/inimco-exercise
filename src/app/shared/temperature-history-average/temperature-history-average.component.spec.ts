import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureHistoryAverageComponent } from './temperature-history-average.component';

describe('TemperatureHistoryAverageComponent', () => {
  let component: TemperatureHistoryAverageComponent;
  let fixture: ComponentFixture<TemperatureHistoryAverageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureHistoryAverageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureHistoryAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
