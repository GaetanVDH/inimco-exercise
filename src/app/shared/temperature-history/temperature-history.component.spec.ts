import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxChartModule } from 'devextreme-angular';

import { TemperatureHistoryComponent } from './temperature-history.component';

describe('TemperatureHistoryComponent', () => {
  let component: TemperatureHistoryComponent;
  let fixture: ComponentFixture<TemperatureHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        DxChartModule
      ],
      declarations: [ TemperatureHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemperatureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
