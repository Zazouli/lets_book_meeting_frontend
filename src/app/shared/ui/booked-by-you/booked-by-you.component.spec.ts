import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedByYouComponent } from './booked-by-you.component';

describe('BookedByYouComponent', () => {
  let component: BookedByYouComponent;
  let fixture: ComponentFixture<BookedByYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedByYouComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookedByYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
