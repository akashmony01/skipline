import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFaqItemComponent } from './home-faq-item.component';

describe('HomeFaqItemComponent', () => {
  let component: HomeFaqItemComponent;
  let fixture: ComponentFixture<HomeFaqItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeFaqItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeFaqItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
