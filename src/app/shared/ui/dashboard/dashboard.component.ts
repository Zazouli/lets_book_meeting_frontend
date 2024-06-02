import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { MeetingCardComponent } from '../../../shared/ui/meeting-card/meeting-card.component';
import { MeetingCardContainerComponent } from '../../../shared/ui/meeting-card-container/meeting-card-container.component';
import { RoomSummaryModel } from '../../domain/entities/room-summary.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MeetingCardContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    console.log(this.availableRooms);
  }
  ngOnInit(): void {
    console.log(this.availableRooms);
  }
  @Input() public bookedByYou!: RoomSummaryModel[];
  @Input() public bookedByYouHistory!: RoomSummaryModel[];
  @Input() public availableRooms!: RoomSummaryModel[];

  @Output() onLogout = new EventEmitter<void>();

  public logout()
  {
    this.onLogout.emit();
  }
}
