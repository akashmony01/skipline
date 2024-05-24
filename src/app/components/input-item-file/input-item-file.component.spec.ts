import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemFileComponent } from './input-item-file.component';

describe('InputItemFileComponent', () => {
  let component: InputItemFileComponent;
  let fixture: ComponentFixture<InputItemFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputItemFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputItemFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
