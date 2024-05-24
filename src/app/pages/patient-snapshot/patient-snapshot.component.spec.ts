import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSnapshotComponent } from './patient-snapshot.component';

describe('PatientSnapshotComponent', () => {
  let component: PatientSnapshotComponent;
  let fixture: ComponentFixture<PatientSnapshotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientSnapshotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
