import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemSearchComponent } from './input-item-search.component';

describe('InputItemSearchComponent', () => {
  let component: InputItemSearchComponent;
  let fixture: ComponentFixture<InputItemSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputItemSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputItemSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
