import { Component, OnInit } from '@angular/core';
import { BookMeetingRoomComponent } from '../../ui/book-meeting-room/book-meeting-room.component';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BookManagementStateService } from '../store/book-management-state-service/book-management-state.service';
import { CreateBookingRequestModule } from '../../domain/entities/create-booking-request.model';
import { RoomSummaryModel } from '../../../shared/domain/entities/room-summary.model';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-meeting-room-shell',
  standalone: true,
  imports: [BookMeetingRoomComponent, HeaderComponent, AsyncPipe],
  templateUrl: './book-meeting-room-shell.component.html',
  styleUrl: './book-meeting-room-shell.component.scss'
})
export class BookMeetingRoomShellComponent implements OnInit {

  public roomId!: string | null;
  public roomSummary$!: Observable<RoomSummaryModel | undefined>;

  constructor(private route: ActivatedRoute, private bookMeetingRoomStateService: BookManagementStateService) {  
  }
  ngOnInit(): void {
    console.log('booking room management')
    this.route.paramMap.subscribe(p =>{
        this.roomId = p.get('id')
        this.roomSummary$ = this.bookMeetingRoomStateService.selectCurrentRoomSummary(this.roomId ?? '')
        console.log(this.roomId);
    })
  }

  public bookMeetingRoom(){
    let startDate = new Date();
    let endDate = new Date();
    endDate.setHours(endDate.getHours() + 2);
    console.log(`start date ${startDate}; endDate ${endDate}`);
    const request = {
      roomId: this.roomId,
      startDate: startDate,
      endDate: endDate
    } as CreateBookingRequestModule
    this.bookMeetingRoomStateService.dispatchBookMeetingRoom(request)
  }
}
