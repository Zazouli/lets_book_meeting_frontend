import { Component, Input } from '@angular/core';
import { MeetingCardComponent } from '../meeting-card/meeting-card.component';

@Component({
  selector: 'app-meeting-card-container',
  standalone: true,
  imports: [MeetingCardComponent],
  templateUrl: './meeting-card-container.component.html',
  styleUrl: './meeting-card-container.component.scss'
})
export class MeetingCardContainerComponent {
  @Input() public className!: string;
  @Input() public list!: any[];
  @Input() public sectionName!: string;
  @Input() public title!: string;
}
