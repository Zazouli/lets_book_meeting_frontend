import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashboardComponent } from '../../../ui/dashboard/dashboard.component';
import { SharedStateService } from '../../store/shared-state-service/shared-state.service';
import { RoomSummaryModel } from '../../../domain/entities/room-summary.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard-shell',
  standalone: true,
  imports: [DashboardComponent, AsyncPipe],
  templateUrl: './dashboard-shell.component.html',
  styleUrl: './dashboard-shell.component.scss'
})
export class DashboardShellComponent implements OnInit {
  public allRoomsSummaries$!: Observable<RoomSummaryModel[]>;
  /**
   *
   */
  constructor(private sharedStateService: SharedStateService) {}
  @Output() onLogout = new EventEmitter<void>();

  ngOnInit(): void {
    // this.sharedStateService.dispatchAvailableRoomsAction();
    this.sharedStateService.dispatchLoadAllRoomSummariesAction();
    this.allRoomsSummaries$ = this.sharedStateService.getAllRoomsSummaries();

  }
  public availableRooms = [{
    roomName: 'room 1',
    roomLocation: 'Location 1'
  },
  {
    roomName: 'room 2',
    roomLocation: 'Location 2'
  },
  {
    roomName: 'room 3',
    roomLocation: 'Location 3'
  },
  {
    roomName: 'room 4',
    roomLocation: 'Location 4'
  },
  {
    roomName: 'room 5',
    roomLocation: 'Location 5'
  },
  {
    roomName: 'room 11',
    roomLocation: 'Location 11'
  },
  {
    roomName: 'room 12',
    roomLocation: 'Location 12'
  }];

  public bookedByYou = [
  {
    roomName: 'room 9',
    roomLocation: 'Location 9'
  },
  {
    roomName: 'room 8',
    roomLocation: 'Location 8'
  }];

  public bookedByYouHistory = [
    {
      roomName: 'room 6',
      roomLocation: 'Location 6'
    },
    {
      roomName: 'room 7',
      roomLocation: 'Location 7'
    }];
  public logout()
  {
    this.onLogout.emit();
  }
}
