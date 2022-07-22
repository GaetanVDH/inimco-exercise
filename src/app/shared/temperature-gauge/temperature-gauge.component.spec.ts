import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxCircularGaugeModule } from 'devextreme-angular';

import { TemperatureGaugeComponent } from './temperature-gauge.component';

describe('TemperatureGaugeComponent', () => {
  let component: TemperatureGaugeComponent;
  let fixture: ComponentFixture<TemperatureGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        DxCircularGaugeModule
      ],
      declarations: [ TemperatureGaugeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
