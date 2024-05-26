import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '../../../shared/ui/header/header.component';
import { MeetingCardComponent } from '../../../shared/ui/meeting-card/meeting-card.component';
import { MeetingCardContainerComponent } from '../../../shared/ui/meeting-card-container/meeting-card-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MeetingCardContainerComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @Input() public bookedByYou!: any[];
  @Input() public bookedByYouHistory!: any[];
  @Input() public availableRooms!: any[];

  @Output() onLogout = new EventEmitter<void>();

  public logout()
  {
    this.onLogout.emit();
  }
}
