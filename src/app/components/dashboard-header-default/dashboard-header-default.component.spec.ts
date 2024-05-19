import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeaderDefaultComponent } from './dashboard-header-default.component';

describe('DashboardHeaderDefaultComponent', () => {
  let component: DashboardHeaderDefaultComponent;
  let fixture: ComponentFixture<DashboardHeaderDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeaderDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardHeaderDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
