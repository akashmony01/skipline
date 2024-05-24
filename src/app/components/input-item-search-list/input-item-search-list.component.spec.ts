import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputItemSearchListComponent } from './input-item-search-list.component';

describe('InputItemSearchListComponent', () => {
  let component: InputItemSearchListComponent;
  let fixture: ComponentFixture<InputItemSearchListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputItemSearchListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputItemSearchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
