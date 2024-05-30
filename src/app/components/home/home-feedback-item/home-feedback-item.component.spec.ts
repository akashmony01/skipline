import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFeedbackItemComponent } from './home-feedback-item.component';

describe('HomeFeedbackItemComponent', () => {
  let component: HomeFeedbackItemComponent;
  let fixture: ComponentFixture<HomeFeedbackItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFeedbackItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFeedbackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
