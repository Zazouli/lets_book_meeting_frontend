import { Component, OnInit } from '@angular/core';
import { SearchAvailableRoomComponent } from '../../ui/search-available-room/search-available-room.component';
import { HeaderComponent } from '../../ui/header/header.component';
import { AuthService } from '../../../core/auth-service.service';
import { SharedStateService } from '../store/shared-state-service/shared-state.service';
import { Observable } from 'rxjs';
import { RoomSummaryModel } from '../../domain/entities/room-summary.model';
import { AsyncPipe } from '@angular/common';
import { MeetingCardContainerComponent } from '../../ui/meeting-card-container/meeting-card-container.component';

@Component({
  selector: 'app-search-available-room-shell',
  standalone: true,
  imports: [SearchAvailableRoomComponent, HeaderComponent, AsyncPipe, MeetingCardContainerComponent],
  templateUrl: './search-available-room-shell.component.html',
  styleUrl: './search-available-room-shell.component.scss'
})
export class SearchAvailableRoomShellComponent implements OnInit {

  public roomSummaries$!: Observable<RoomSummaryModel[]>;
  constructor(private authService: AuthService, private sharedStateService: SharedStateService) {
    
  }
  ngOnInit(): void {
    this.sharedStateService.dispatchResetRoomSummariesAction();
    this.roomSummaries$ = this.sharedStateService.getAllRoomsSummaries();
  }
  logout() {
    this.authService.logout();
  }

  public search(value: {date: Date, meetingDuration: number}) {
    this.sharedStateService.dispatchSearchMeetingRoomsByDateAction(value.date, value.meetingDuration);
  }
}
