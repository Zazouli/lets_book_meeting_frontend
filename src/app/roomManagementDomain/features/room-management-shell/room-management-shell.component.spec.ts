import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomManagementShellComponent } from './room-management-shell.component';

describe('RoomManagementShellComponent', () => {
  let component: RoomManagementShellComponent;
  let fixture: ComponentFixture<RoomManagementShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomManagementShellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoomManagementShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
