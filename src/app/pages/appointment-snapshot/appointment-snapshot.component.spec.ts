import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentSnapshotComponent } from './appointment-snapshot.component';

describe('AppointmentSnapshotComponent', () => {
  let component: AppointmentSnapshotComponent;
  let fixture: ComponentFixture<AppointmentSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
