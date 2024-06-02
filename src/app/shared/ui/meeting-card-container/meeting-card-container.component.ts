import { Component, Input } from '@angular/core';
import { MeetingCardComponent } from '../meeting-card/meeting-card.component';
import { RoomSummaryModel } from '../../domain/entities/room-summary.model';

@Component({
  selector: 'app-meeting-card-container',
  standalone: true,
  imports: [MeetingCardComponent],
  templateUrl: './meeting-card-container.component.html',
  styleUrl: './meeting-card-container.component.scss'
})
export class MeetingCardContainerComponent {
  @Input() public className!: string;
  @Input() public list!: RoomSummaryModel[] | null;
  @Input() public sectionName!: string;
  @Input() public title!: string;
}
