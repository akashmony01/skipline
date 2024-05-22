import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContentWrapperComponent } from './dashboard-content-wrapper.component';

describe('DashboardContentWrapperComponent', () => {
  let component: DashboardContentWrapperComponent;
  let fixture: ComponentFixture<DashboardContentWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardContentWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardContentWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
