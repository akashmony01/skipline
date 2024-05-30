import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagePreferenceComponent } from './language-preference.component';

describe('LanguagePreferenceComponent', () => {
  let component: LanguagePreferenceComponent;
  let fixture: ComponentFixture<LanguagePreferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagePreferenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LanguagePreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
