import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-meeting-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './meeting-card.component.html',
  styleUrl: './meeting-card.component.scss'
})
export class MeetingCardComponent {

  @Input()
  public roomName!: string | undefined;
  @Input() public roomLocation!: string | undefined;
  @Input() public roomId!: string | undefined;

  public get link(): string{
    return `/bookmanagement/${this.roomId}`
  }
}
