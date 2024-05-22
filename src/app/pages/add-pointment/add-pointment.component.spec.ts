import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPointmentComponent } from './add-pointment.component';

describe('AddPointmentComponent', () => {
  let component: AddPointmentComponent;
  let fixture: ComponentFixture<AddPointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPointmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
