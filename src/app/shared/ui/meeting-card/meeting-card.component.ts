import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-meeting-card',
  standalone: true,
  imports: [],
  templateUrl: './meeting-card.component.html',
  styleUrl: './meeting-card.component.scss'
})
export class MeetingCardComponent {

  @Input()
  public roomName!: string;
  @Input() public roomLocation!: string;
}
