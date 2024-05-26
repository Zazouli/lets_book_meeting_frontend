import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCardContainerComponent } from './meeting-card-container.component';

describe('MeetingCardContainerComponent', () => {
  let component: MeetingCardContainerComponent;
  let fixture: ComponentFixture<MeetingCardContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeetingCardContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetingCardContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
