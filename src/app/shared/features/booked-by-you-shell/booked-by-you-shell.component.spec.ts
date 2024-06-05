import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookedByYouShellComponent } from './booked-by-you-shell.component';

describe('BookedByYouShellComponent', () => {
  let component: BookedByYouShellComponent;
  let fixture: ComponentFixture<BookedByYouShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookedByYouShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookedByYouShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
