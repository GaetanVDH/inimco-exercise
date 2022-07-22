import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { CoreModule } from '../core/core.module';
import { DashboardService } from '../core/services/dashboard.service';
import { DashboardServiceMock } from '../core/testing/dashboard-service.mock';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    let dashboardServiceMock = new DashboardServiceMock();
    await TestBed.configureTestingModule({
      imports: [
        CoreModule,
        MatGridListModule,
        MatCardModule,
        MatButtonModule,
        SharedModule,
      ],
      declarations: [
        DashboardComponent
      ],
      providers: [{
        provide: DashboardService, useValue: dashboardServiceMock
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show dashboard', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-grid-list')).toBeTruthy();
  });

  it('should show 4 mat-grid-tiles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('mat-grid-tile').length).toEqual(4);
  });
});
