import { Component, Input } from '@angular/core';
import { BookedByUserDTO } from '../../domain/entities/booked-by-user.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-booked-by-you',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './booked-by-you.component.html',
  styleUrl: './booked-by-you.component.scss'
})
export class BookedByYouComponent {
  @Input() bookedByUser!: BookedByUserDTO[];
}
