import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoomShellComponent } from './add-room-shell.component';

describe('AddRoomShellComponent', () => {
  let component: AddRoomShellComponent;
  let fixture: ComponentFixture<AddRoomShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRoomShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRoomShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
